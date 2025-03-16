import { BookRepository } from "../../domain/repository";

class FindAllBook{
    constructor(private bookRepository: BookRepository){}
    run(): Promise<Book[]>{
        return this.bookRepository.findAll();
    }
}

export default FindAllBook;