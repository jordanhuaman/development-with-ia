import { BookRepository } from "../../domain/repository";

class FindBook{
    constructor(private bookRepository: BookRepository){}
    async run(id: string): Promise<Book|undefined>{
        return await this.bookRepository.find(id);
    }
}

export default FindBook;