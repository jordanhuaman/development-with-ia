import { NextFunction, Request, Response, Router } from "express";
import glob, { globSync } from "glob";
import path from "path";

import { ValidationError, validationResult } from "express-validator";
import httpStatus from "http-status"

export function registerRoutes(router: Router) {
  const routes = globSync("src/**/*.route.ts", { ignore: "node_modules/**" })
  routes.map((route) => register(route, router));
}

function register(routePath: string, router: Router) {
  const route = require(path.resolve(routePath));
  route.register(router);
}

export function validateReqSchema(req: Request, res: Response, next: NextFunction) {
  const validationsErrors = validationResult(req);
  if (validationsErrors.isEmpty()) {
    return next();
  }
  
  const errors = validationsErrors.array().map((err) => {
    if ("param" in err && "msg" in err) {
      return { field: err.param, message: err.msg };
    }
    return { field: "unknown", message: "Unknown error" };
  });
  res.status(httpStatus.UNPROCESSABLE_ENTITY).json({ errors });
}