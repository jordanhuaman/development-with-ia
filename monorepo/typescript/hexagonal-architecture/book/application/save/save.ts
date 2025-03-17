import Book from "../../domain/Book";
import { BookRepository } from "../../domain/repository";

class SaveBook {
  constructor(private readonly bookRepository: BookRepository) {}
  async run(book: Book): Promise<void> {
    await this.bookRepository.save(book);
  }
}
export default SaveBook;