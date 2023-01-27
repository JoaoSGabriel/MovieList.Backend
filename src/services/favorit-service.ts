import httpStatus from "http-status";
import { requestError } from "../errors/request-error";
import favoritRepository from "../repositories/favorit-repository";

async function setNewFavorit(
  userId: number,
  tmdbMovieId: number,
  tmdbTitle: string,
  tmbdPoster_path: string
) {
  const hasFavorit = await favoritRepository.getFavoritMovie(
    userId,
    tmdbMovieId
  );

  if (hasFavorit) {
    throw requestError(httpStatus.CONFLICT, "Not found favorit movie");
  }

  await favoritRepository.setFavorit(
    userId,
    tmdbMovieId,
    tmdbTitle,
    tmbdPoster_path
  );

  return;
}

async function searchFavorits(userId: number, tmdbMovieId: number) {
  const hasFavorit = await favoritRepository.getFavoritMovie(
    userId,
    tmdbMovieId
  );

  if (!hasFavorit) {
    throw requestError(httpStatus.NOT_FOUND, "Not found favorit movie");
  }

  return hasFavorit;
}

async function deleteFavorits(favoritId: number) {
  await favoritRepository.deleteFavoritMovie(favoritId);
  return;
}

const favoritService = { setNewFavorit, searchFavorits, deleteFavorits };

export default favoritService;
