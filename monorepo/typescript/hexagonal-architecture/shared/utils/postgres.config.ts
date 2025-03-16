export interface PostgresConfig{
  uri: string;
  options: PostgresOptions
}

export interface PostgresOptions{
  host:string;
  port:number;
  database:string;
  username:string;
  password:string;
}

export const defaultPostgresConfig: PostgresConfig = {
  uri: 'postgres://postgres:postgres@localhost:5432/postgres',
  options: {
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    username: 'postgres',
    password: 'postgres'
  }
}