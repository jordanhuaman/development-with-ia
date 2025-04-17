import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { Controller } from "./Controller";
import { CourseCreator } from "../../../../Contexts/Mooc/Courses/application/CourseCreator";

export default class CoursePutController implements Controller {
  constructor(private courseCreator: CourseCreator) { }

  async run(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id, name, duration } = req.body
    await this.courseCreator.run({ id, name, duration });
    res.status(httpStatus.CREATED).json({ status: "ok" });
  }
}