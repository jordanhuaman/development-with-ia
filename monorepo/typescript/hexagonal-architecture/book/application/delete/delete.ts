import { BookRepository } from "../../domain/repository";

class DeleteBook{
    constructor(private bookRepository: BookRepository) {}
    run(bookId: string): void {
        this.bookRepository.delete(bookId);
    }
}
export default DeleteBook;