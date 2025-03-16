import DeleteBook from "../../book/application/delete/delete";
import FindBook from "../../book/application/find/find";
import FindAllBook from "../../book/application/findAll/findAll";
import SaveBook from "../../book/application/save/save";
import PostgresRepository from "../../book/infra/PostgresRepository";
import { defaultPostgresConfig } from "../utils/postgres.config";

const postgresRepository = new PostgresRepository(defaultPostgresConfig);

export const SERVICE_CONTAINER = {
  book:{
    delete: new DeleteBook(postgresRepository),
    find: new FindBook(postgresRepository),
    findAll: new FindAllBook(postgresRepository),
    save: new SaveBook(postgresRepository)
  }
}