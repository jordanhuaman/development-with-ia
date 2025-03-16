import BookFinder from "../../domain/BookFinder";
import { BookRepository } from "../../domain/repository";

class FindBook{
    constructor(private bookRepository: BookRepository){}
    async run(id: string): Promise<Book|undefined>{
        //? This always return a book or throw an error
        const videoFinder = new BookFinder(this.bookRepository);
        const book = await videoFinder.run(id);
        return book;
        // return await this.bookRepository.find(id);
    }
}

export default FindBook;