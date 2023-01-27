import httpStatus from "http-status";
import { requestError } from "../errors/request-error";
import watchedRepository from "../repositories/watched-repository";

async function setMovieWatched(
  userId: number,
  tmdbMovieId: number,
  tmdbTitle: string,
  tmbdPoster_path: string
) {
  const hasPlanning = await watchedRepository.getWatchedMovies(
    userId,
    tmdbMovieId
  );

  if (hasPlanning) {
    throw requestError(httpStatus.CONFLICT, "This movie already are favorit");
  }

  await watchedRepository.setWatched(
    userId,
    tmdbMovieId,
    tmdbTitle,
    tmbdPoster_path
  );

  return;
}

async function searchWatchedMovie(userId: number, tmdbMovieId: number) {
  const hasWatched = await watchedRepository.getWatchedMovies(
    userId,
    tmdbMovieId
  );

  if (!hasWatched) {
    throw requestError(httpStatus.NOT_FOUND, "Not found favorit movie");
  }

  return hasWatched;
}

async function deleteWatchedMovie(watchedMovieId: number) {
  await watchedRepository.deleteWatchedMovie(watchedMovieId);
  return;
}

const watchedService = {
  setMovieWatched,
  searchWatchedMovie,
  deleteWatchedMovie,
};

export default watchedService;
