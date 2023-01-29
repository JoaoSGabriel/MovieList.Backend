import historyRepository from "../repositories/history-repositorie";
import httpStatus from "http-status";
import { requestError } from "../errors/request-error";

async function SearchAllHistory(userId: number) {
  const history = await historyRepository.searchUserHistory(userId);

  return history;
}

const historyService = {
  SearchAllHistory,
};

export default historyService;
