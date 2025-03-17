import Book from "../../book/domain/Book";
import { SERVICE_CONTAINER } from "../../shared/containers";
beforeAll(() => {
  const book = new Book("title1", "author2");
  const saveBook = SERVICE_CONTAINER.book.save;
  saveBook.run(book);
})

describe("Book Services", () => {
  it("Should be return all books", async () => {
    const findAllBooks = SERVICE_CONTAINER.book.findAll;
    const books = await findAllBooks.run();
    expect(books.length).toBe(1);
  })
})