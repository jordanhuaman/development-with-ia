import DeleteBook from "../../book/application/delete/delete";
import FindBook from "../../book/application/find/find";
import FindAllBook from "../../book/application/findAll/findAll";
import SaveBook from "../../book/application/save/save";
import PostgresRepository from "../../book/infra/PostgresRepository";
import BookMockRepository from "../../test/book/BookMockRepository";
import { defaultPostgresConfig } from "../utils/postgres.config";

const implementation = new BookMockRepository();
// const implementation = new PostgresRepository(defaultPostgresConfig);

export const SERVICE_CONTAINER = {
  book:{
    delete: new DeleteBook(implementation),
    find: new FindBook(implementation),
    findAll: new FindAllBook(implementation),
    save: new SaveBook(implementation)
  }
}