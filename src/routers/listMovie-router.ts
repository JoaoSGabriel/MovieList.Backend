import {
  checkFavoritMovie,
  deleteFavoritMovie,
  postNewFavoritMovie,
} from "../controllers/listMovie-controller";
import { authenticateToken } from "../middlewares/authentication-middleware";
import { Router } from "express";

const listMoviesRouter = Router();

listMoviesRouter
  .all("/*", authenticateToken)
  .get("/favorits", checkFavoritMovie)
  .post("/favorits/new", postNewFavoritMovie)
  .delete("/favorits", deleteFavoritMovie);

export { listMoviesRouter };
