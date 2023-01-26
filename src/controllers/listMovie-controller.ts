import { AuthenticatedRequest } from "../middlewares/authentication-middleware";
import { Request, Response } from "express";
import httpStatus from "http-status";
import listMoviesService from "@/services/listMovies-service";

export async function postNewFavoritMovie(
  req: AuthenticatedRequest,
  res: Response
) {
  const body = req.body;
  const { userId } = req;

  try {
    await listMoviesService.setNewFavorit(userId, body);
    res.sendStatus(httpStatus.OK);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}
