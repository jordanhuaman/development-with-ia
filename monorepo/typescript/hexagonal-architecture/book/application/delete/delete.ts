import BookFinder from "../../domain/BookFinder";
import { BookRepository } from "../../domain/repository";

class DeleteBook{
    private bookFinder: BookFinder;
    constructor(private bookRepository: BookRepository) {
        this.bookFinder = new BookFinder(this.bookRepository);
    }
    async run(bookId: string): Promise<void> {
        const book = await this.bookFinder.run(bookId);
        this.bookRepository.delete(bookId);
    }
}
export default DeleteBook;