import { Router, Request, Response } from "express";
import { WebsiteRequestService } from "../services/websiteRequestService.js";

export const websiteRequestRouter = Router();

websiteRequestRouter.post("/", async (req: Request, res: Response) => {
  try {
    const result = await WebsiteRequestService.createRequest(req.body);
    res.status(201).json(result);
  } catch (error: any) {
    res.status(400).json({ detail: error.message || "Failed to create request" });
  }
});

websiteRequestRouter.get("/", async (req: Request, res: Response) => {
  try {
    const requests = await WebsiteRequestService.getRequests();
    res.json(requests);
  } catch (error: any) {
    res.status(500).json({ detail: error.message || "Failed to fetch requests" });
  }
});

websiteRequestRouter.put("/:request_id/status", async (req: Request, res: Response) => {
  try {
    const requestId = parseInt(req.params.request_id, 10);
    const { status } = req.body;
    const updated = await WebsiteRequestService.updateStatus(requestId, status);
    if (!updated) {
      return res.status(404).json({ detail: "Website request not found" });
    }
    res.json(updated);
  } catch (error: any) {
    res.status(400).json({ detail: error.message || "Invalid status update" });
  }
});
