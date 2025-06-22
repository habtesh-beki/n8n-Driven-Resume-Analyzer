import { NextFunction, Response, Request } from "express";
import { findOne } from "../DB/repositories/user.repositories.js";
import { verifyToken } from "../utils/jwt.js";

export const authenticateJWT = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) {
    res.status(403).json({ message: "Access denied. No token provided." });
    return;
  }
  const decoded = verifyToken(token);
  if (!decoded) {
    res.status(401).json({ message: "Invalid token" });
    return;
  }

  try {
    const email = decoded;
    const user = await findOne(email);
    console.log(user);
    if (!user) {
      res.status(404).json({
        message: "user not found",
      });
      return;
    }

    // req.user = user;
    next();
  } catch (err) {
    res.status(500).json({
      message: "Error fetching student data",
    });
  }
};
