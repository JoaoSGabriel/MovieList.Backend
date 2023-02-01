import { authenticateToken } from "../middlewares/authentication-middleware";
import { Router } from "express";
import {
  deleteLikeHistory,
  getAllHistoryInteractions,
  getHistoryInfo,
  postComment,
  postLikeHistory,
} from "../controllers/history-controller";

const historyRouter = Router();

historyRouter
  .get("/", getAllHistoryInteractions)
  .get("/info", getHistoryInfo)
  .all("/*", authenticateToken)
  .post("/comment", postComment)
  .post("/like", postLikeHistory)
  .delete("/like", deleteLikeHistory);

export { historyRouter };
