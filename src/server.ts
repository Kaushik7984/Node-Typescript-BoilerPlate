import { Request, Response } from "express";
import app from "./app";
import { connectDB } from "./config/db";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get("/", (_req: Request, res: Response) => {
  res.status(200).send("Server is Working!");
});
