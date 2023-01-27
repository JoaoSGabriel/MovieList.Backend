import { PrismaClient } from "@prisma/client";
import prisma from "../config/database";

async function setPlanning(
  userId: number,
  tmdbMovieId: number,
  tmdbTitle: string,
  tmbdPoster_path: string
) {
  return prisma.planingSee.create({
    data: {
      tmdbMovieId: tmdbMovieId,
      tmdbTitle: tmdbTitle,
      tmbdPoster_path: tmbdPoster_path,
      userId,
    },
  });
}

async function getPlanningMovies(userId: number, tmdbMovieId: number) {
  return await prisma.planingSee.findFirst({
    where: {
      userId,
      tmdbMovieId,
    },
  });
}

async function deletePlanningMovie(favoritId: number) {
  return await prisma.planingSee.delete({
    where: {
      id: favoritId,
    },
  });
}

const planningRepository = {
  setPlanning,
  getPlanningMovies,
  deletePlanningMovie,
};

export default planningRepository;
