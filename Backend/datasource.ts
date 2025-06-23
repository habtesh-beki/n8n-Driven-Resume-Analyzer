import "reflect-metadata";
import { DataSource } from "typeorm";
import { UserTable } from "./DB/schema/user.schema.js";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [UserTable],
  synchronize: true,
});
