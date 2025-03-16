import { BookRepository } from "../../domain/repository";

class FindBook{
    constructor(private bookRepository: BookRepository){}
    async execute(id: string): Promise<Book>{
        return await this.bookRepository.find(id);
    }
}