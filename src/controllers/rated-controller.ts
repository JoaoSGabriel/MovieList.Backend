import { AuthenticatedRequest } from "../middlewares/authentication-middleware";
import { Response } from "express";
import httpStatus from "http-status";
import ratedService from "../services/rated-service";

export async function postNewRate(req: AuthenticatedRequest, res: Response) {
  const { tmdbMovieId, tmdbTitle, tmdbPoster_path, rated } = req.body;

  if (!tmdbMovieId || !tmdbTitle || !tmdbPoster_path || rated) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }

  const { userId } = req;

  try {
    await ratedService.newRate(
      userId,
      tmdbMovieId,
      tmdbTitle,
      tmdbPoster_path,
      rated
    );

    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function deleteRate(req: AuthenticatedRequest, res: Response) {
  const { rateId } = req.query;

  try {
    await ratedService.deleteRate(Number(rateId));

    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
