import { Router } from "express";
import glob, {globSync} from "glob";
import path from "path";

export function registerRoutes(router: Router) {
  const routes = globSync("src/**/*.route.ts",{ignore:"node_modules/**"})
  console.log(routes)
  routes.map((route) => register(route, router));
}

function register(routePath: string, router: Router) {
  const route = require(path.resolve(routePath));
  route.register(router);
}