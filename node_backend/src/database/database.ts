import pg from "pg";
import { settings } from "../core/config.js";

const { Pool } = pg;

export const pool = new Pool({
  connectionString: settings.DATABASE_URL,
  ssl: settings.NODE_ENV === "production" ? { rejectUnauthorized: false } : undefined,
});

export async function initDatabase(): Promise<void> {
  try {
    const client = await pool.connect();
    console.log("🐘 [PostgreSQL]: Successfully connected to PostgreSQL database!");
    client.release();
  } catch (error) {
    console.error("❌ [PostgreSQL]: Could not connect to PostgreSQL database.", error);
    console.error("   Run migrations first: npm run migrate");
    process.exit(1);
  }
}
