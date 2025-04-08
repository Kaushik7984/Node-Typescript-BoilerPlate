import { Request, Response } from "express";
import DemoModel from "../models/demo.model";

export const getDemoData = async (_req: Request, res: Response) => {
  try {
    const data = await DemoModel.find();
    res.status(200).json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};
