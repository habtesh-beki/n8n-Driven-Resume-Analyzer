import express, { Application, Request, Response } from "express";
import router from "./routes/routes.js";
import { configDotenv } from "dotenv";
import { initialize } from "./Intialize.js";
const app: Application = express();
const PORT = process.env.PORT || 3000;

configDotenv();
app.use(express.json());
initialize();
app.use("/api", router);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
