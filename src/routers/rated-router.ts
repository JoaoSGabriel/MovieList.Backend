import { authenticateToken } from "../middlewares/authentication-middleware";
import { Router } from "express";
import { deleteRate, postNewRate } from "../controllers/rated-controller";

const ratedRouter = Router();

ratedRouter
  .all("/*", authenticateToken)
  .post("/", postNewRate)
  .delete("/", deleteRate);

export { ratedRouter };
