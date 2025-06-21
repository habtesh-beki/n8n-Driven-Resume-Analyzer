import { AppDataSource } from "./datasource";

export const initialize = async () => {
  try {
    await AppDataSource.initialize();
    console.log("DB connected");
  } catch (error) {
    console.log("DB Error :", error);
  }
};
