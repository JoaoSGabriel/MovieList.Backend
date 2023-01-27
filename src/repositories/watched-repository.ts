import prisma from "../config/database";

async function setWatched(
  userId: number,
  tmdbMovieId: number,
  tmdbTitle: string,
  tmbdPoster_path: string
) {
  return prisma.watched.create({
    data: {
      tmdbMovieId: tmdbMovieId,
      tmdbTitle: tmdbTitle,
      tmbdPoster_path: tmbdPoster_path,
      userId,
    },
  });
}

async function getWatchedMovies(userId: number, tmdbMovieId: number) {
  return await prisma.watched.findFirst({
    where: {
      userId,
      tmdbMovieId,
    },
  });
}

async function deleteWatchedMovie(watchedMovieId: number) {
  return await prisma.watched.delete({
    where: {
      id: watchedMovieId,
    },
  });
}

const watchedRepository = {
  setWatched,
  getWatchedMovies,
  deleteWatchedMovie,
};

export default watchedRepository;
