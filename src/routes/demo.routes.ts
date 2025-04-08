import { Router } from "express";
import { getDemoData } from "../controllers/demo.controller";

const router = Router();

router.get("/demo", getDemoData);

export default router;
