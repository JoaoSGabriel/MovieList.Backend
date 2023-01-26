import { AuthenticatedRequest } from "../middlewares/authentication-middleware";
import { Request, Response } from "express";
import httpStatus from "http-status";
import listMoviesService from "../services/listMovies-service";

export async function postNewFavoritMovie(
  req: AuthenticatedRequest,
  res: Response
) {
  const { tmdbMovieId, tmdbTitle, tmdbPoster_path } = req.body;

  if (!tmdbMovieId || !tmdbTitle || !tmdbPoster_path) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }

  const { userId } = req;

  try {
    await listMoviesService.setNewFavorit(
      userId,
      tmdbMovieId,
      tmdbTitle,
      tmdbPoster_path
    );
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
  }
}
