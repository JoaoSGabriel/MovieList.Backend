import historyRepository from "../repositories/history-repositorie";
import httpStatus from "http-status";
import profileRepository from "../repositories/profile.repository";

async function SearchAllHistory(username: string) {
  const user = await profileRepository.findByUsername(username);

  const history = await historyRepository.searchUserHistory(user.userId);

  return history;
}

const historyService = {
  SearchAllHistory,
};

export default historyService;
