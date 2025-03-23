import { Router, Request, Response, NextFunction } from "express"
import StatusGetController from "../controllers/StatusGetController";
import container from "../dependency-inyection";

export const register =async (router: Router) => {
  const contai = await container()
  const controller:StatusGetController = await contai.get("Apps.mooc.controllers.StatusGetController");
  router.get("/status", (req: Request, res: Response,next:NextFunction) =>  controller.run(req, res,next));
}