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

const listMoviesRepository = {
  setFavorit,
};

export default listMoviesRepository;
