import dotenv from "dotenv";

dotenv.config();

export interface Settings {
  NODE_ENV: string;
  PORT: number;
  DATABASE_URL: string;
  EMAIL_ADDRESS: string;
  EMAIL_PASSWORD: string;
  FRONTEND_URL: string;
  CORS_ORIGINS: string[];
}

const rawDbUrl = process.env.DATABASE_URL || "postgresql://postgres:postgres@localhost:5433/custom_websites_db";
const sanitizedDbUrl = rawDbUrl.replace("postgresql+psycopg2://", "postgresql://");

const defaultLocalOrigins = [
  "http://localhost:5173",
  "http://localhost:5172",
  "http://localhost:5174",
];

const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";
const extraOrigins = (process.env.CORS_ORIGINS || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

export const settings: Settings = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: Number(process.env.PORT) || 8000,
  DATABASE_URL: sanitizedDbUrl,
  EMAIL_ADDRESS: process.env.EMAIL_ADDRESS || "",
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD || "",
  FRONTEND_URL: frontendUrl,
  CORS_ORIGINS: [
    ...new Set([
      frontendUrl,
      ...(process.env.NODE_ENV === "production" ? [] : defaultLocalOrigins),
      ...extraOrigins,
    ]),
  ],
};
