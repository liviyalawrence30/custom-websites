require("dotenv").config();

const rawDbUrl =
  process.env.DATABASE_URL || "postgresql://postgres:postgres@localhost:5433/custom_websites_db";

module.exports = {
  databaseUrl: rawDbUrl.replace("postgresql+psycopg2://", "postgresql://"),
  dir: "migrations",
  migrationsTable: "pgmigrations",
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : undefined,
};
