import listMoviesRepository from "../repositories/listMovies-repository";

async function setNewFavorit(
  userId: number,
  tmdbMovieId: number,
  tmdbTitle: string,
  tmbdPoster_path: string
) {
  const favorit = await listMoviesRepository.setFavorit(
    userId,
    tmdbMovieId,
    tmdbTitle,
    tmbdPoster_path
  );
  return favorit;
}

const listMoviesService = { setNewFavorit };

export default listMoviesService;
