import { Router, Request, Response } from "express"
import StatusGetController from "../controllers/StatusGetController";
import container from "../dependency-inyection";

export const register =async (router: Router) => {
  const contai = await container()
  const controller = await contai.get("Apps.mooc.controllers.StatusGetController");
  router.get("/status", (req: Request, res: Response) =>  controller.run(req, res));
}