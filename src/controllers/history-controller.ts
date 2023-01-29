import { AuthenticatedRequest } from "../middlewares/authentication-middleware";
import { Response } from "express";
import httpStatus from "http-status";
import historyService from "../services/history-service";

export async function getAllHistoryInteractions(
  req: AuthenticatedRequest,
  res: Response
) {
  const { userId } = req;

  try {
    const history = await historyService.SearchAllHistory(userId);
    res.status(httpStatus.OK).send(history);
  } catch (error) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
