import { configDotenv } from "dotenv";
import jwt from "jsonwebtoken";
configDotenv();

const JWT_SECRET = process.env.JWT_SECRET as string;
export const signToken = async (id: string) => {
  const token = jwt.sign({ id }, JSON.stringify(JWT_SECRET), {
    expiresIn: 60 * 60 * 60,
  });
  return token;
};

export const verifyToken = (token: string): any => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
};
