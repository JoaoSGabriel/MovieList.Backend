import interactionRepository from "../repositories/interaction-repository";
import historyRepository from "../repositories/history-repositorie";
import profileRepository from "../repositories/profile.repository";

async function SearchAllHistory(username: string) {
  const user = await profileRepository.findByUsername(username);

  const history = await historyRepository.searchUserHistory(user.userId);

  return history;
}

async function searchHistoryInfo(historyId: number) {
  const history = await interactionRepository.findHistoryInfo(historyId);

  return history;
}

const historyService = {
  SearchAllHistory,
  searchHistoryInfo,
};

export default historyService;
