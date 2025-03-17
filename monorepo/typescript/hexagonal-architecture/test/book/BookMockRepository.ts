import Book from "../../book/domain/Book";
import { BookRepository } from "../../book/domain/repository";

class BookMockRepository implements BookRepository{

  private books: Book[] = [];

  async save(book: Book): Promise<void> {
    this.books.push(book);
  }
  async delete(bookId: string): Promise<void> {
    this.books.filter(book => book.getAuthor() !== bookId);
  }
  async findAll(): Promise<Book[]> {
    return this.books
  }
  async find(bookId: string): Promise<Book | undefined> {
    throw new Error("Method not implemented.");
  }
}

export default BookMockRepository;