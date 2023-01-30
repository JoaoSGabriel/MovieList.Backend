import prisma from "../config/database";
import { Prisma } from "@prisma/client";

async function findByEmail(email: string, select?: Prisma.UserSelect) {
  const params: Prisma.UserFindUniqueArgs = {
    where: {
      email,
    },
  };

  if (select) {
    params.select = select;
  }

  return prisma.user.findUnique(params);
}

async function findByUsername(username: string) {
  return prisma.profile.findUnique({
    where: {
      username,
    },
  });
}

async function create(data: Prisma.UserUncheckedCreateInput) {
  return prisma.user.create({
    data,
  });
}

async function createProfile(data: Prisma.ProfileUncheckedCreateInput) {
  return prisma.profile.create({
    data,
  });
}

const userRepository = {
  findByEmail,
  findByUsername,
  create,
  createProfile,
};

export default userRepository;
