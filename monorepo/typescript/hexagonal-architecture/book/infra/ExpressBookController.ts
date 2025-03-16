import express, { Router } from "express"
import BookController from "./BookController"
const controller = new BookController();

const bookRoute = Router();

bookRoute.get("/users/", controller.findAll);
bookRoute.get("/users/:id/", controller.find);
bookRoute.post("/users/", controller.save);
bookRoute.put("/users/", controller.delete);
bookRoute.delete("/users/:id", controller.delete);

export default bookRoute;