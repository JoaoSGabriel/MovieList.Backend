import { AuthenticatedRequest } from "../middlewares/authentication-middleware";
import { Response } from "express";
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
    console.log(error.message);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function checkFavoritMovie(
  req: AuthenticatedRequest,
  res: Response
) {
  const { tmdbMovieId } = req.query;
  const { userId } = req;

  try {
    const favorit = await listMoviesService.searchFavorits(
      userId,
      Number(tmdbMovieId)
    );
    return res.status(httpStatus.OK).send(favorit);
  } catch (error) {
    if (error.name === "RequestError") {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
  }
}

export async function deleteFavoritMovie(
  req: AuthenticatedRequest,
  res: Response
) {
  const { favoritId } = req.query;

  try {
    await listMoviesService.deleteFavorits(Number(favoritId));
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
