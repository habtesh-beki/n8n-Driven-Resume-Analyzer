import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./DB/schema/user.schema";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "habtesh01",
  database: "n8n-resume-analyzer",
  entities: [User],
  synchronize: true,
});
