import ratedRepository from "../repositories/rated-repository";

async function newRate(
  userId: number,
  tmdbMovieId: number,
  tmdbTitle: string,
  tmbdPoster_path: string,
  rated: number
) {
  await ratedRepository.newRate({
    userId,
    tmdbMovieId,
    tmdbTitle,
    tmbdPoster_path,
    rated,
  });

  return;
}

async function deleteRate(rateId: number) {
  await ratedRepository.deleteRate(rateId);

  return;
}

const ratedService = {
  newRate,
  deleteRate,
};

export default ratedService;
