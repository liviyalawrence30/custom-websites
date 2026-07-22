import {
  BookingCreate,
  BookingResponse,
} from "../schemas/booking.js";

import { BookingRepository } from "../repositories/bookingRepository.js";

export class BookingService {
  public static async createBooking(
    booking: BookingCreate
  ): Promise<BookingResponse> {

    return BookingRepository.create(booking);
  }

  public static async getBookings(): Promise<
    BookingResponse[]
  > {

    return BookingRepository.getAll();
  }

  public static async updateStatus(
    bookingId: number,
    status: string
  ): Promise<BookingResponse | null> {

    const validStatuses = [
      "Pending",
      "Confirmed",
      "Completed",
      "Cancelled",
    ];

    if (!validStatuses.includes(status)) {
      throw new Error("Invalid booking status");
    }

    return BookingRepository.updateStatus(
      bookingId,
      status
    );
  }
}