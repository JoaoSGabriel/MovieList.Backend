import ratedRepository from "../repositories/rated-repository";

async function newRate(
  userId: number,
  tmdbMovieId: number,
  tmdbTitle: string,
  tmbdPoster_path: string,
  rated: number
) {
  const hasRate = await ratedRepository.findRate(userId, tmdbMovieId);

  if (hasRate) {
    return;
  }

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

async function findRate(userId: number, tmdbMovieId: number) {
  const hasRate = await ratedRepository.findRate(userId, tmdbMovieId);

  return hasRate;
}

const ratedService = {
  newRate,
  deleteRate,
  findRate,
};

export default ratedService;
