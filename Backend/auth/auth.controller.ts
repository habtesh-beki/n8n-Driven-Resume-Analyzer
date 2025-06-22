import { Request, Response } from "express";
import { AppError } from "../utils/AppError.js";
import { findOne } from "../DB/repositories/user.repositories.js";
import { verifyPassword } from "../services/hash.service.js";
import { signToken } from "../utils/jwt.js";
import { create } from "../DB/repositories/user.repositories.js";
import { responseWithSuccess } from "../utils/AppResponse.js";

type Iuser = {
  first_name: string;
  email: string;
  password: string;
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password)
    throw new AppError(404, "please insert password and email");
  const user = await findOne(email);
  if (!user) throw new AppError(404, "Incorrect username or password");
  const TheSamePassword = verifyPassword(password, user.password);
  if (!TheSamePassword) throw new AppError(404, "Incorrect email or password");
  const Token = await signToken(user.email);
  res.status(200).json({
    token: Token,
  });
};

export const register = async (req: Request, res: Response) => {
  const userData = req.body;
  const data = await create(userData);
  console.log("user data", data);
  if (!data) throw new AppError(400, "error occured");
  responseWithSuccess<Iuser>(res, data, 201);
};
