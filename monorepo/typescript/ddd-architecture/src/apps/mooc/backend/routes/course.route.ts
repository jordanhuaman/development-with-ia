import { Request, Response, Router } from "express";
import container from "../dependency-inyection";
import CoursePutController from "../controllers/CoursePutController";

export const register = async (router: Router) => {
  const contai = await container();
  const putcontroller: CoursePutController = await contai.get("Apps.mooc.controllers.CoursePutController");
  router.put("/courses/:id", (req: Request, res: Response) => putcontroller.run(req, res))
}