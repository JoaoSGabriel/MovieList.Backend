import TMDB from "../utils/TMDB-config";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getTopTrendingList(req: Request, res: Response) {
  try {
    const data = await TMDB.getTrendingNow();
    res.status(httpStatus.OK).send(data);
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function getTopRatedList(req: Request, res: Response) {
  try {
    const data = await TMDB.getTopRated();
    res.status(httpStatus.OK).send(data);
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
