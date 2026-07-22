import { Router, Request, Response } from "express";
import { BookingService } from "../services/bookingService.js";

export const bookingRouter = Router();

bookingRouter.post("/", async (req: Request, res: Response) => {
  try {
    const newBooking = await BookingService.createBooking(req.body);
    res.status(201).json(newBooking);
  } catch (error: any) {
    res.status(400).json({
      detail: error.message || "Failed to create booking",
    });
  }
});

bookingRouter.get("/", async (req: Request, res: Response) => {
  try {
    const bookings = await BookingService.getBookings();
    res.json(bookings);
  } catch (error: any) {
    res.status(500).json({
      detail: error.message || "Failed to fetch bookings",
    });
  }
});

bookingRouter.put(
  "/:booking_id/status",
  async (req: Request, res: Response) => {
    try {
      const bookingId = parseInt(
        req.params.booking_id,
        10
      );

      const { status } = req.body;

      const updated =
        await BookingService.updateStatus(
          bookingId,
          status
        );

      if (!updated) {
        return res.status(404).json({
          detail: "Booking not found",
        });
      }

      res.json(updated);
    } catch (error: any) {
      res.status(400).json({
        detail:
          error.message || "Invalid status update",
      });
    }
  }
);