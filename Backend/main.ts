import express, { Application } from "express";
import router from "./routes/routes";
import { configDotenv } from "dotenv";
import { initialize } from "./Intialize";
const app: Application = express();
const PORT = process.env.PORT || 3000;

configDotenv();
app.use(express.json());

initialize();
app.use("/api", router);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
