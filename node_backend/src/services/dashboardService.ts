import { getDashboardStats as fetchStats } from "../repositories/dashboardRepository.js";
import { DashboardStats } from "../schemas/dashboard.js";

export async function getStats(): Promise<DashboardStats> {
  return fetchStats();
}
