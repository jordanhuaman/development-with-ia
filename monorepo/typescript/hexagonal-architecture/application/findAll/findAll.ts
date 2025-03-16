import { BookRepository } from "../../domain/repository";

class FindAllBook{
    constructor(private bookRepository: BookRepository){}
    execute(): Book[]{
        return this.bookRepository.findAll();
    }
}