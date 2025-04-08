import express from "express";
import dotenv from "dotenv";
import router from "./routes/demo.routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/v1", router);

export default app;
