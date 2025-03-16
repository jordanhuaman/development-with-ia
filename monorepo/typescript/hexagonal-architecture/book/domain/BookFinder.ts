import { BookRepository } from "./repository";
import BookNotFound from "./BookNotFound";

class BookFinder{
  constructor(private bookRepository: BookRepository){}

  public async run(id: string): Promise<Book>{
    const book = await this.bookRepository.find(id);
    /**
     * If the book is not found, we can throw an error or return null.
     * It depends on the business logic.
     * Book is goint to be {null || undefined || Book || something else}
     */
    if(book === undefined){
      throw new BookNotFound(id); // or return null;
    }
    return book;
  }
}

export default BookFinder;