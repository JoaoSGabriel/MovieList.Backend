import { authenticateToken } from "../middlewares/authentication-middleware";
import { Router } from "express";
import {
  checkPlanningMovie,
  deletePlanningMovie,
  postNewPlanningMovie,
} from "../controllers/planning-controller";

const planningRouter = Router();

planningRouter
  .all("/*", authenticateToken)
  .get("/", checkPlanningMovie)
  .post("/new", postNewPlanningMovie)
  .delete("/", deletePlanningMovie);

export { planningRouter };
