import { authenticateToken } from "../middlewares/authentication-middleware";
import { Router } from "express";
import {
  getAllHistoryInteractions,
  getHistoryInfo,
  postLikeHistory,
} from "../controllers/history-controller";

const historyRouter = Router();

historyRouter
  .get("/", getAllHistoryInteractions)
  .get("/info", getHistoryInfo)
  .all("/*", authenticateToken)
  .post("/like", postLikeHistory);

export { historyRouter };
