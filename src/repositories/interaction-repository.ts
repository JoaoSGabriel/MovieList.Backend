import { Prisma } from "@prisma/client";
import prisma from "../config/database";

async function findHistoryInfo(historyId: number) {
  return prisma.history.findFirst({
    where: {
      id: historyId,
    },
    include: {
      Comment: true,
      Like: true,
    },
  });
}

async function createComment(data: Prisma.CommentUncheckedCreateInput) {
  return prisma.comment.create({
    data,
  });
}

async function addLikeOnHistory(data: Prisma.LikeUncheckedCreateInput) {
  return prisma.like.create({ data });
}

async function removeLike(likeId: number) {
  return prisma.like.delete({
    where: {
      id: likeId,
    },
  });
}

const interactionRepository = {
  findHistoryInfo,
  createComment,
  addLikeOnHistory,
  removeLike,
};

export default interactionRepository;
