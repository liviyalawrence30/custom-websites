import { WebsiteRequestCreate, WebsiteRequestResponse } from "../schemas/websiteRequest.js";
import { WebsiteRequestRepository } from "../repositories/websiteRequestRepository.js";

export class WebsiteRequestService {
  public static async createRequest(request: WebsiteRequestCreate): Promise<WebsiteRequestResponse> {
    return WebsiteRequestRepository.create(request);
  }

  public static async getRequests(): Promise<WebsiteRequestResponse[]> {
    return WebsiteRequestRepository.getAll();
  }

  public static async updateStatus(requestId: number, status: string): Promise<WebsiteRequestResponse | null> {
    const validStatuses = ["Pending", "In Progress", "Completed", "Cancelled"];
    if (!validStatuses.includes(status)) {
      throw new Error(`Invalid status: ${status}. Must be one of ${validStatuses.join(", ")}`);
    }
    return WebsiteRequestRepository.updateStatus(requestId, status);
  }
}
