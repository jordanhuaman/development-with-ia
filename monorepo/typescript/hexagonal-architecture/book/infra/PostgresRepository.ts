import postgres, { Sql } from "postgres";
import { BookRepository } from "../domain/repository";
import { PostgresConfig } from "../../shared/utils/postgres.config";
import Book from "../domain/Book";
class PostgresRepository implements BookRepository {

  private readonly sql: Promise<Sql<{}>>;

  constructor(private readonly config: PostgresConfig) {
    this.sql = this.connect(config);
  }

  private async connect(config: PostgresConfig): Promise<Sql<{}>> {
    try {
      return postgres(config.uri, config.options);
    } catch (error) {
      console.error('Error initializing database:', error);
      throw error;
    }
  }
  async save(book: Book): Promise<void> {
    const sql = await this.sql;
    await sql`INSERT INTO books (title, author) VALUES (${book.getTitle()}, ${book.getAuthor()})`;

  }
  async delete(bookId: string): Promise<void> {
    const sql = await this.sql;
    await sql`DELETE FROM books WHERE id = ${bookId}`;
  }
  async findAll(): Promise<Book[]> {
    const sql = await this.sql;
    return sql<Book[]> `SELECT * FROM books`;
  }
  async find(bookId: string): Promise<Book | undefined> {
    const sql = await this.sql;
    const result = await sql<Book[]> `SELECT * FROM books WHERE id = ${bookId}`;
    return result.length > 0 ? result[0] : undefined;
  }
}

export default PostgresRepository;