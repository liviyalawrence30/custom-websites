import { WebsiteRequestRepository } from "./websiteRequestRepository.js";
import { BookingRepository } from "./bookingRepository.js";
import { SlotRepository } from "./slotRepository.js";
import { DashboardStats } from "../schemas/dashboard.js";

export async function getDashboardStats(): Promise<DashboardStats> {
  const requests = await WebsiteRequestRepository.getAll();
  const bookings = await BookingRepository.getAll();
  const slots = await SlotRepository.getAll();

  const availableSlots = slots.filter((s) => s.is_available).length;
  const bookedSlots = slots.filter((s) => !s.is_available).length;

  return {
    website_requests: requests.length,
    bookings: bookings.length,
    available_slots: availableSlots,
    booked_slots: bookedSlots,
  };
}
