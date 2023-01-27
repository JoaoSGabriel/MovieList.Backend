import {
  checkFavoritMovie,
  deleteFavoritMovie,
  postNewFavoritMovie,
} from "../controllers/listMovie-controller";
import { authenticateToken } from "../middlewares/authentication-middleware";
import { Router } from "express";

const favoritsRouter = Router();

favoritsRouter
  .all("/*", authenticateToken)
  .get("/", checkFavoritMovie)
  .post("/new", postNewFavoritMovie)
  .delete("/", deleteFavoritMovie);

export { favoritsRouter };
