import prisma from "../config/database";

async function createHistory(userId: number, type: string) {
  return await prisma.history.create({
    data: {
      userId,
      type: "WATCHED",
    },
  });
}

const historyRepository = {
  createHistory,
};

export default historyRepository;
