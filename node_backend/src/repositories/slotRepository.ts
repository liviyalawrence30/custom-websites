import { pool } from "../database/database.js";
import { SlotCreate, SlotResponse } from "../schemas/slot.js";

export class SlotRepository {
  public static async getAll(): Promise<SlotResponse[]> {
    const res = await pool.query("SELECT * FROM slots ORDER BY date, time");
    return res.rows;
  }

  public static async create(slot: SlotCreate): Promise<SlotResponse> {
    const existing = await pool.query("SELECT * FROM slots WHERE date = $1 AND time = $2", [
      slot.date,
      slot.time,
    ]);
    if (existing.rows.length > 0) {
      throw new Error("This slot already exists.");
    }

    const res = await pool.query(
      "INSERT INTO slots (date, time, is_available) VALUES ($1, $2, true) RETURNING *",
      [slot.date, slot.time]
    );
    return res.rows[0];
  }

  public static async delete(slotId: number): Promise<SlotResponse | null> {
    const res = await pool.query("DELETE FROM slots WHERE id = $1 RETURNING *", [slotId]);
    return res.rows[0] || null;
  }

  public static async bookSlot(slotId: number): Promise<SlotResponse | null> {
    const res = await pool.query(
      "UPDATE slots SET is_available = false WHERE id = $1 RETURNING *",
      [slotId]
    );
    return res.rows[0] || null;
  }
}
