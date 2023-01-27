import prisma from "../config/database";
import { Prisma } from "@prisma/client";

async function setFavorit(
  userId: number,
  tmdbMovieId: number,
  tmdbTitle: string,
  tmbdPoster_path: string
) {
  return prisma.movieFavorits.create({
    data: {
      tmdbMovieId: tmdbMovieId,
      tmdbTitle: tmdbTitle,
      tmbdPoster_path: tmbdPoster_path,
      userId,
    },
  });
}

async function getFavoritMovie(userId: number, tmdbMovieId: number) {
  return await prisma.movieFavorits.findFirst({
    where: {
      userId,
      tmdbMovieId,
    },
  });
}

async function deleteFavoritMovie(favoritId: number) {
  return await prisma.movieFavorits.delete({
    where: {
      id: favoritId,
    },
  });
}

const listMoviesRepository = {
  setFavorit,
  getFavoritMovie,
  deleteFavoritMovie,
};

export default listMoviesRepository;
