import { MovieTrendingList } from "../protocols";
import { request } from "./request";

const api_key = process.env.TMDB_SECRET;
const language = "pt-BR";

async function getTrendingNow(): Promise<MovieTrendingList> {
  const data = await request.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=${language}&page=1`
  );

  return data.data;
}

async function getTopRated(): Promise<MovieTrendingList> {
  const data = await request.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=${language}&page=1`
  );

  return data.data;
}

async function getUpcoming(): Promise<MovieTrendingList> {
  const data = await request.get(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=${language}&page=1`
  );

  return data.data;
}

const TMDB = {
  getTrendingNow,
  getTopRated,
  getUpcoming,
};

export default TMDB;
