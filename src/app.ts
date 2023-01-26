import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import { moviesRouter } from "./routers/movies-router";
import { usersRouter } from "./routers/users-router";
import { authenticationRouter } from "./routers/authentication-router";
import { listMoviesRouter } from "./routers/listMovie-router";

const port = +process.env.PORT;

const app = express();
app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("Oh, hey there, I'm OK!"))
  .use("/movies", moviesRouter)
  .use("/users", usersRouter)
  .use("/auth", authenticationRouter)
  .use("/action", listMoviesRouter)
  .listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
  });
