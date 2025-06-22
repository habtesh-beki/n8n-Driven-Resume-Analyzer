import "reflect-metadata";
import { DataSource } from "typeorm";
import { configDotenv } from "dotenv";
import { UserTable } from "./DB/schema/user.schema.js";

configDotenv();
console.log(process.env.POSTGRES_HOST);
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "postgres",
  port: 5432,
  username: "postgres",
  password: "habtemariam",
  database: "resume_analysis",
  entities: [UserTable],
  synchronize: true,
});
