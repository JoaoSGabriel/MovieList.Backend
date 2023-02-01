import { Router } from "express";
import {
  getAllHistoryInteractions,
  getHistoryInfo,
} from "../controllers/history-controller";

const historyRouter = Router();

historyRouter.get("/", getAllHistoryInteractions).get("/info", getHistoryInfo);

export { historyRouter };
