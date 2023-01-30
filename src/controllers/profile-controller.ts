import { AuthenticatedRequest } from "../middlewares/authentication-middleware";
import { Response } from "express";
import httpStatus from "http-status";
import profileService from "../services/profile-service";

export async function getProfileByUsername(
  req: AuthenticatedRequest,
  res: Response
) {
  const username = req.query?.username;
  if (typeof username !== "string") {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }

  try {
    const profile = await profileService.getProfile(username);
    res.status(httpStatus.OK).send(profile);
  } catch (error) {
    if (error.name === "RequestError") {
      res.sendStatus(httpStatus.NOT_FOUND);
    }
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function putProfile(req: AuthenticatedRequest, res: Response) {
  const { username, poster_path, backdrop_path } = req.body;

  if (!username) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }

  const { userId } = req;

  try {
    await profileService.updateProfile(userId, {
      username,
      poster_path,
      backdrop_path,
    });

    res.sendStatus(httpStatus.OK);
  } catch (error) {
    if (error.name === "RequestError") {
      res.sendStatus(httpStatus.NOT_FOUND);
    }
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
