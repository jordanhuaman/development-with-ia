import { NextFunction, Request, Response, Router } from "express";
import container from "../dependency-inyection";
import CoursePutController from "../controllers/CoursePutController";
import { body } from "express-validator";
import { validateReqSchema } from ".";

export const register = async (router: Router) => {

  const reqSchema = [
    body("id").exists().isString(),
    body("name").exists().isString(),
    body("duration").exists().isString()
  ];

  const contai = await container();
  const putcontroller: CoursePutController = await contai.get("Apps.mooc.controllers.CoursePutController");
  router.put("/courses/:id",reqSchema,validateReqSchema, (req: Request, res: Response,next:NextFunction) => putcontroller.run(req, res, next))
}