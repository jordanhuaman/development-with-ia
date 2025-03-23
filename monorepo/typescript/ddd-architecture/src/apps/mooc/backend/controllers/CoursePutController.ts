import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { Controller } from "./Controller";

export default class CoursePutController implements Controller {
  async run(req: Request, res: Response,next:NextFunction): Promise<void> {
    // res.status(httpStatus.CREATED).json({ status: "ok" });
    throw new Error("Method is not implemented");
  }
}