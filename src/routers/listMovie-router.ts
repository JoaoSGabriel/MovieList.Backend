import { postNewFavoritMovie } from "@/controllers/listMovie-controller";
import { authenticateToken } from "@/middlewares/authentication-middleware";
import { Router } from "express";

const listMoviesRouter = Router();

listMoviesRouter
  .all("/*", authenticateToken)
  .post("/favorits/new", postNewFavoritMovie);

export { listMoviesRouter };
