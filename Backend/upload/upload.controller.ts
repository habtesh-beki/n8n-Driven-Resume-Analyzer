import { Request, Response } from "express";
import FormData from "form-data";
import fs from "fs";
import axios from "axios";
import path from "path";

export const uploadResume = async (req: Request, res: Response) => {
  const file = req.file;

  if (!file) {
    res.status(400).json({ message: "No file uploaded" });
    return;
  }

  try {
    const fullPath = path.resolve(file.path);

    const form = new FormData();
    form.append("file", fs.createReadStream(fullPath), {
      filename: file.originalname,
      contentType: file.mimetype,
    });
    form.append("originalName", file.originalname);

    const response = await axios.post(
      "http://localhost:5678/webhook-test/resume_analyze",
      form,
      {
        headers: form.getHeaders(),
      }
    );

    res.json({
      message: "File uploaded and sent to n8n",
      response: response.data,
    });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ message: "Failed to send to n8n" });
  }
};
