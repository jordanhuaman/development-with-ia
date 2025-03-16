class BookNotFound extends Error {
  constructor(id: string) {
    super(`Book with id ${id} not found`);
  }
}

export default BookNotFound