import express, { Application, Request, Response } from "express";
import router from "./routes/routes.js";
// import { config as configDotenv } from "dotenv";
import dotenv from "dotenv";
import { initialize } from "./Intialize.js";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

console.log("postgres_user", process.env.POSTGRES_USER);
app.use(express.json());
initialize();
app.use("/api", router);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
