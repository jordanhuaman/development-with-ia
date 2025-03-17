import Book from "../../domain/Book";
import BookFinder from "../../domain/BookFinder";
import { BookRepository } from "../../domain/repository";

class FindBook{
    private bookFinder: BookFinder;
    constructor(private bookRepository: BookRepository){
        this.bookFinder = new BookFinder(this.bookRepository);
    }
    async run(id: string): Promise<Book|undefined>{
        //? This always return a book or throw an error
        const book = await this.bookFinder.run(id);
        return book;
        // return await this.bookRepository.find(id);
    }
}

export default FindBook;