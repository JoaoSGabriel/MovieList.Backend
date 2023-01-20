import {
  getSearchMovies,
  getTopRatedList,
  getTopTrendingList,
  getUpcomingList,
} from "../controllers/movie-controller";
import { Router } from "express";

const moviesRouter = Router();

moviesRouter
  .get("/toptrendig", getTopTrendingList)
  .get("/toprated", getTopRatedList)
  .get("/upcoming", getUpcomingList)
  .get("/search/:title", getSearchMovies);

export { moviesRouter };
