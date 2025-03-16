import { Request, Response, NextFunction } from "express";
import { SERVICE_CONTAINER } from "../../shared/containers";

class BookController {

  async save(req: Request, res: Response) {
    const { title, author } = req.body;
    const bookIn = new Book(title, author);
    const { book } = SERVICE_CONTAINER;

    book.save.run(bookIn);
    
    res.status(201).json({ msg: "all ok" });
  }
  async delete(req: Request, res: Response) {

  }
  async findAll(req: Request, res: Response) {
    const {book} = SERVICE_CONTAINER;
    const books = book.findAll.run();
    console.log(books)
    res.status(200).json({msg:"All ok"})
  }
  async find(req: Request, res: Response) {
  }
}

export default BookController;