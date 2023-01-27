import httpStatus from "http-status";
import { requestError } from "../errors/request-error";
import listMoviesRepository from "../repositories/listMovies-repository";

async function setNewFavorit(
  userId: number,
  tmdbMovieId: number,
  tmdbTitle: string,
  tmbdPoster_path: string
) {
  const hasFavorit = await listMoviesRepository.getFavoritMovie(
    userId,
    tmdbMovieId
  );

  if (hasFavorit) {
    throw requestError(httpStatus.CONFLICT, "Not found favorit movie");
  }

  await listMoviesRepository.setFavorit(
    userId,
    tmdbMovieId,
    tmdbTitle,
    tmbdPoster_path
  );

  return;
}

async function searchFavorits(userId: number, tmdbMovieId: number) {
  const hasFavorit = await listMoviesRepository.getFavoritMovie(
    userId,
    tmdbMovieId
  );

  if (!hasFavorit) {
    throw requestError(httpStatus.NOT_FOUND, "Not found favorit movie");
  }

  return hasFavorit;
}

const listMoviesService = { setNewFavorit, searchFavorits };

export default listMoviesService;
