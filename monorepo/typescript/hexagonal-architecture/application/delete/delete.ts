import { BookRepository } from "../../domain/repository";

class DeleteBook{
    constructor(private bookRepository: BookRepository) {}
    deleteBook(bookId: string): void {
        this.bookRepository.delete(bookId);
    }
}