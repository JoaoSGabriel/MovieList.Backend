import { MovieTrendingList } from "../protocols";
import { request } from "./request";

const api_key = process.env.TMDB_SECRET;

async function getTrendingNow(): Promise<MovieTrendingList> {
  const data = await request.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=pt-br&page=1`
  );

  return data.data;
}

async function getTopRated(): Promise<MovieTrendingList> {
  const data = await request.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=pt-br&page=1`
  );

  return data.data;
}

const TMDB = {
  getTrendingNow,
  getTopRated,
};

export default TMDB;
