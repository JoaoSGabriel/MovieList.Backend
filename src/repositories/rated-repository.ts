import { Prisma } from "@prisma/client";
import prisma from "../config/database";

async function newRate(data: Prisma.RatedUncheckedCreateInput) {
  return prisma.rated.create({
    data,
  });
}

async function deleteRate(rateId: number) {
  return prisma.rated.delete({
    where: {
      id: rateId,
    },
  });
}

async function editRate(newRate: number, rateId: number) {
  return prisma.rated.update({
    data: {
      rated: newRate,
    },
    where: {
      id: rateId,
    },
  });
}

async function findRate(userId: number, tmdbMovieId: number) {
  return prisma.rated.findFirst({
    where: {
      userId,
      tmdbMovieId,
    },
  });
}

const ratedRepository = {
  newRate,
  deleteRate,
  editRate,
  findRate,
};

export default ratedRepository;
