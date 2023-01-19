import express, { Express } from "express";
import cors from "cors";

//import { loadEnv, connectDb, disconnectDB } from "@/config";

import { moviesRouter } from "./routers/movies-router";

const app = express();
app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("Oh, hey there, I'm OK!"))
  .use("/movies", moviesRouter)
  .listen(4000, () => {
    console.log("ta na porta 4000");
  });
