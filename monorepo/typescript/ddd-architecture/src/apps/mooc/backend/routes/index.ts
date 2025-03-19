import { Router } from "express";
import glob, {globSync} from "glob";
import path from "path";

export function registerRoutes(router: Router) {
  const routes = globSync(path.join(__dirname + "/**/*.route.ts"));
  routes.map((route) => register(route, router));
}

function register(routePath: string, router: Router) {
  const route = require(routePath);
  route.register(router);
}