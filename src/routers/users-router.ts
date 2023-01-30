import { Router } from "express";

import { createUserSchema } from "../schemas/users-schemas";
import { validateBody } from "../middlewares/validation-middleware";
import { usersPost } from "../controllers/users-controller";
import { getProfileByUsername } from "../controllers/profile-controller";

const usersRouter = Router();

usersRouter
  .post("/", validateBody(createUserSchema), usersPost)
  .get("/profile", getProfileByUsername);

export { usersRouter };
