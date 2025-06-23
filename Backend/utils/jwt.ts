import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

export const signToken = async (id: string) => {
  console.log(JWT_SECRET);
  const token = jwt.sign(
    { id },
    "n8n-driven-resume-analyzer-secure-and-ai-driven",
    // JWT_SECRET,
    {
      expiresIn: 60 * 60 * 60,
    }
  );
  return token;
};

export const verifyToken = (token: string): any => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
};
