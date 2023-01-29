import { HistoryType } from "@prisma/client";
import prisma from "../config/database";

async function createHistory(userId: number, type: HistoryType) {
  return await prisma.history.create({
    data: {
      userId,
      type,
    },
  });
}

async function searchUserHistory(userId: number) {
  return await prisma.history.findMany({
    where: {
      userId,
    },
    include: {
      Watched: true,
      PlaningSee: true,
      MovieFavorits: true,
    },
  });
}

const historyRepository = {
  createHistory,
  searchUserHistory,
};

export default historyRepository;
