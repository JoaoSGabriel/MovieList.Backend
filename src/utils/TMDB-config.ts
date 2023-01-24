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

async function getSearch(text: string): Promise<MovieTrendingList> {
  const data = await request.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=${language}&query=${text}&page=1&include_adult=true`
  );

  return data.data;
}

async function getMovieDetails(movieId: number): Promise<MovieTrendingList> {
  const data = await request.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=${language}`
  );

  return data.data;
}

async function getCollection(collectionId: number): Promise<MovieTrendingList> {
  const data = await request.get(
    `https://api.themoviedb.org/3/collection/${collectionId}?api_key=${api_key}&language=${language}`
  );

  return data.data;
}

async function getMovieCredits(movieId: number): Promise<MovieTrendingList> {
  const data = await request.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${api_key}&language=${language}`
  );

  return data.data;
}

const TMDB = {
  getTrendingNow,
  getTopRated,
  getUpcoming,
  getSearch,
  getMovieDetails,
  getCollection,
  getMovieCredits,
};

export default TMDB;
