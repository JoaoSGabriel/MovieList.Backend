import listMoviesRepository from "../repositories/listMovies-repository";

async function setNewFavorit(
  userId: number,
  data: { tmdbMovieId: number; tmdbTitle: string; tmbdPoster_path: string }
) {
  const favorit = await listMoviesRepository.setFavorit(userId, data);
  return favorit;
}

const listMoviesService = { setNewFavorit };

export default listMoviesService;
