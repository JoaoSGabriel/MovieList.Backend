import { getTopTrendingList } from "../controllers/movie-controller";
import { Router } from "express";

const moviesRouter = Router();

moviesRouter.get("/toptrendig", getTopTrendingList);

export { moviesRouter };
