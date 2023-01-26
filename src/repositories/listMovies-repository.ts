import prisma from "../config/database";
import { Prisma } from "@prisma/client";

async function setFavorit(
  userId: number,
  data: { tmdbMovieId: number; tmdbTitle: string; tmbdPoster_path: string }
) {
  return prisma.movieFavorits.create({
    data: {
      tmdbMovieId: data.tmdbMovieId,
      tmdbTitle: data.tmdbTitle,
      tmbdPoster_path: data.tmbdPoster_path,
      userId,
    },
  });
}

const listMoviesRepository = {
  setFavorit,
};

export default listMoviesRepository;
