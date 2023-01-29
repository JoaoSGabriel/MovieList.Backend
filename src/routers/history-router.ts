import { authenticateToken } from "../middlewares/authentication-middleware";
import { Router } from "express";
import { getAllHistoryInteractions } from "../controllers/history-controller";

const historyRouter = Router();

historyRouter.all("/*", authenticateToken).get("/", getAllHistoryInteractions);

export { historyRouter };
