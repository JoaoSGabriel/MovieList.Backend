import {
  getTopRatedList,
  getTopTrendingList,
} from "../controllers/movie-controller";
import { Router } from "express";

const moviesRouter = Router();

moviesRouter
  .get("/toptrendig", getTopTrendingList)
  .get("/toprated", getTopRatedList);

export { moviesRouter };
