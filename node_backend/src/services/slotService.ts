import { SlotCreate, SlotResponse } from "../schemas/slot.js";
import { SlotRepository } from "../repositories/slotRepository.js";

export class SlotService {
  public static async getAllSlots(): Promise<SlotResponse[]> {
    return SlotRepository.getAll();
  }

  public static async createSlot(slot: SlotCreate): Promise<SlotResponse> {
    return SlotRepository.create(slot);
  }

  public static async deleteSlot(slotId: number): Promise<SlotResponse | null> {
    return SlotRepository.delete(slotId);
  }

  public static async bookSlot(slotId: number): Promise<SlotResponse | null> {
    return SlotRepository.bookSlot(slotId);
  }
}
