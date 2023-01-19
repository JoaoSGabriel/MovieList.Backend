import { request } from "./request";

const api_key = process.env.TMDB_SECRET;

async function getTopTrending() {
  const data = await request.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=pt-br&page=1`
  );

  return data.data;
}

const TMDB = {
  getTopTrending,
};

export default TMDB;
