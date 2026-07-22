import { Router, Request, Response } from "express";
import { SlotService } from "../services/slotService.js";

export const slotRouter = Router();

slotRouter.get("/", async (req: Request, res: Response) => {
  try {
    const slots = await SlotService.getAllSlots();
    res.json(slots);
  } catch (error: any) {
    res.status(500).json({ detail: error.message || "Failed to fetch slots" });
  }
});

slotRouter.post("/", async (req: Request, res: Response) => {
  try {
    const newSlot = await SlotService.createSlot(req.body);
    res.status(201).json(newSlot);
  } catch (error: any) {
    res.status(400).json({ detail: error.message || "Failed to create slot" });
  }
});

slotRouter.delete("/:slot_id", async (req: Request, res: Response) => {
  try {
    const slotId = parseInt(req.params.slot_id, 10);
    await SlotService.deleteSlot(slotId);
    res.json({ message: "Slot deleted successfully" });
  } catch (error: any) {
    res.status(400).json({ detail: error.message || "Failed to delete slot" });
  }
});

slotRouter.put("/:slot_id/book", async (req: Request, res: Response) => {
  try {
    const slotId = parseInt(req.params.slot_id, 10);
    await SlotService.bookSlot(slotId);
    res.json({ message: "Slot booked successfully" });
  } catch (error: any) {
    res.status(400).json({ detail: error.message || "Failed to book slot" });
  }
});
