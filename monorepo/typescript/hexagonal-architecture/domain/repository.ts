export interface BookRepository{
    save(book: Book): Promise<void>;
    delete(bookId: string): Promise<void>;
    findAll(): Promise<Book[]>
    //TODO: implement Criteria or Specification pattern
    find(bookId: string): Promise<Book|undefined>;
  }