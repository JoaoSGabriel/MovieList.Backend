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

const ratedRepository = {
  newRate,
  deleteRate,
};

export default ratedRepository;
