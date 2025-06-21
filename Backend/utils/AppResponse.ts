import { Response } from "express";
import { AppError } from "../utils/AppError";

export const responseWithSuccess = <T>(
  res: Response,
  data: T,
  statusCode: number
) => {
  const response = {
    status: "success",
    data: data,
  };
  return res.status(statusCode).json(response);
};

export const responseWithError = (
  res: Response,
  status: "error" | "fail",
  err: AppError,
  statusCode: number
) => {
  const response = {
    res: res,
    status: status,
    err,
  };
  res.status(statusCode).json(response);
};
