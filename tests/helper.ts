import { User } from "@prisma/client";
import * as jwt from "jsonwebtoken";
import * as userFactorie from "./factories/users-factory";
import prisma from "../src/config/database";

export async function cleanDB() {
  await prisma.like.deleteMany({});
  await prisma.comment.deleteMany({});
  await prisma.watched.deleteMany({});
  await prisma.planingSee.deleteMany({});
  await prisma.movieFavorits.deleteMany({});
  await prisma.rated.deleteMany({});
  await prisma.history.deleteMany({});
  await prisma.profile.deleteMany({});
  await prisma.session.deleteMany({});
  await prisma.user.deleteMany({});
}

export async function generateValidToken(user?: User) {
  const incomingUser = user || (await userFactorie.createUser());
  const token = jwt.sign({ userId: incomingUser.id }, process.env.JWT_SECRET);

  await userFactorie.createSession(token);

  return token;
}
