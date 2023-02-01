import { authenticateToken } from "../middlewares/authentication-middleware";
import { Router } from "express";
import {
  deleteLikeHistory,
  getAllHistoryInteractions,
  getHistoryInfo,
  postLikeHistory,
} from "../controllers/history-controller";

const historyRouter = Router();

historyRouter
  .get("/", getAllHistoryInteractions)
  .get("/info", getHistoryInfo)
  .all("/*", authenticateToken)
  .post("/like", postLikeHistory)
  .delete("/like", deleteLikeHistory);

export { historyRouter };
