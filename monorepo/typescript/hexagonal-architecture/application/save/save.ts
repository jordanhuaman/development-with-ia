import { BookRepository } from "../../domain/repository";

class SaveBook {
  constructor(private readonly bookRepository: BookRepository) {}
  async execute(book: Book): Promise<void> {
    await this.bookRepository.save(book);
  }
}