import express, { Request, Response } from "express";
import cors from "cors";
import { settings } from "./core/config.js";
import { websiteRequestRouter } from "./routers/websiteRequestRouter.js";
import { bookingRouter } from "./routers/bookingRouter.js";
import { slotRouter } from "./routers/slotRouter.js";
import { dashboardRouter } from "./routers/dashboardRouter.js";

import { initDatabase } from "./database/database.js";

const app = express();

app.use(
  cors({
    origin: settings.CORS_ORIGINS,
    credentials: true,
    methods: ["*"],
    allowedHeaders: ["*"],
  })
);

app.use(express.json());

// Main Root & Health
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to Custom Websites API" });
});

app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "healthy" });
});

// Mounting Routers matching FastAPI prefix routes
app.use("/website-requests", websiteRequestRouter);
app.use("/bookings", bookingRouter);
app.use("/slots", slotRouter);
app.use("/dashboard", dashboardRouter);


// Start Express Server & Init PostgreSQL
app.listen(settings.PORT, async () => {
  await initDatabase();
  console.log(`⚡ [server]: Modular Express TypeScript Backend running at http://localhost:${settings.PORT}`);
});
