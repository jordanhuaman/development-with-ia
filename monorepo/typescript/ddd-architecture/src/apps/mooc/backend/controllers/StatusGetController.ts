import { NextFunction, Request, Response } from "express";
import { Controller } from "./Controller";
import httpStatus from "http-status";

export default class StatusGetController implements Controller {
  async run(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      res.status(httpStatus.OK).json({ status: "ok" });
    } catch (error) {
      next(error);
    }
  }
}