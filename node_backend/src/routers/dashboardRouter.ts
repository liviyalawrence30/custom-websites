import { Router, Request, Response } from "express";
import { getStats } from "../services/dashboardService.js";

export const dashboardRouter = Router();

dashboardRouter.get("/stats", async (req: Request, res: Response) => {
  try {
    const stats = await getStats();
    res.json(stats);
  } catch (error: any) {
    res.status(500).json({ detail: error.message || "Failed to fetch dashboard stats" });
  }
});
