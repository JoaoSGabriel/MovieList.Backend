import { Prisma } from "@prisma/client";
import prisma from "../config/database";

async function create(data: Prisma.ProfileUncheckedCreateInput) {
  return prisma.profile.create({
    data,
  });
}

async function findByUsername(username: string) {
  return prisma.profile.findUnique({
    where: {
      username,
    },
  });
}

const profileRepository = {
  create,
  findByUsername,
};

export default profileRepository;
