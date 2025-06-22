import { Router } from "express";
import { login } from "../auth/auth.controller.js";
import { uploadResume } from "../upload/upload.controller.js";
import { authenticateJWT } from "../middleware/auth.middleware";
import { register } from "../auth/auth.controller.js";
import multer from "multer";

const router = Router();
const upload = multer({ dest: "uploads/" });

router.post("/auth/login", login);
router.post("/auth/register", register);
router.post("/upload", upload.single("resume"), uploadResume);
// authenticateJWT,
export default router;
