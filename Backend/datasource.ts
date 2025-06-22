import "reflect-metadata";
import { DataSource } from "typeorm";
import { configDotenv } from "dotenv";
import { User } from "./DB/schema/user.schema.js";

configDotenv();
console.log(process.env.POSTGRES_HOST);
export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT || "5432"),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [User],
  synchronize: true,
});
