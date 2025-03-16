export interface PostgresConfig{
  uri: string;
  options: PostgresOptions
}

export interface PostgresOptions{
  host:string;
  post:string;
  database:string;
  username:string;
  password:string;
}