import historyRepository from "../repositories/history-repositorie";
import httpStatus from "http-status";
import { requestError } from "../errors/request-error";
import planningRepository from "../repositories/planning-repository";

async function setNewPlanning(
  userId: number,
  tmdbMovieId: number,
  tmdbTitle: string,
  tmbdPoster_path: string
) {
  const hasPlanning = await planningRepository.getPlanningMovies(
    userId,
    tmdbMovieId
  );

  if (hasPlanning) {
    throw requestError(httpStatus.CONFLICT, "This movie already are favorit");
  }

  const history = await historyRepository.createHistory(userId, "PLANNING");

  await planningRepository.setPlanning(
    userId,
    tmdbMovieId,
    tmdbTitle,
    tmbdPoster_path,
    history.id
  );

  return;
}

async function searchPlanning(userId: number, tmdbMovieId: number) {
  const hasFavorit = await planningRepository.getPlanningMovies(
    userId,
    tmdbMovieId
  );

  if (!hasFavorit) {
    throw requestError(httpStatus.NOT_FOUND, "Not found favorit movie");
  }

  return hasFavorit;
}

async function deletePlanningMovie(planningId: number) {
  await planningRepository.deletePlanningMovie(planningId);
  return;
}

async function searchAllPlanning(userId: number) {
  const planning = await planningRepository.getAllPlanning(userId);

  return planning;
}

const planningService = {
  setNewPlanning,
  searchPlanning,
  deletePlanningMovie,
  searchAllPlanning,
};

export default planningService;
