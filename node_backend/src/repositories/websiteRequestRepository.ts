import { pool } from "../database/database.js";
import { WebsiteRequestCreate, WebsiteRequestResponse } from "../schemas/websiteRequest.js";
import { EmailService } from "../services/emailService.js";

export class WebsiteRequestRepository {
  public static async create(request: WebsiteRequestCreate): Promise<WebsiteRequestResponse> {
    const query = `
      INSERT INTO website_requests (
        name, email, phone, business_name, website_type, number_of_pages,
        feature_needs, hosting, maintenance_frequency, seo_level, discovery_call, budget, description, status
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
      RETURNING *;
    `;

    const values = [
      request.name,
      request.email,
      request.phone,
      request.business_name,
      request.website_type,
      request.number_of_pages || null,
      request.feature_needs || null,
      request.hosting ?? false,
      request.maintenance_frequency || null,
      request.seo_level || null,
      request.discovery_call ?? false,
      request.budget,
      request.description || null,
      "Pending",
    ];

    const res = await pool.query(query, values);
    const newRequest: WebsiteRequestResponse = res.rows[0];

    // Send complete confirmation email to client on initial creation
    await EmailService.sendEmail(
      newRequest.email,
      "Website Request Confirmation - Custom Websites",
      `
Hello ${newRequest.name},

Thank you for submitting your custom website request to Custom Websites!

We have successfully received your project details:

--------------------------------------------------
PROJECT REQUEST SUMMARY:
--------------------------------------------------
• Client Name: ${newRequest.name}
• Business Name: ${newRequest.business_name}
• Website Type: ${newRequest.website_type}
• Budget Range: ${newRequest.budget}
• Status: ${newRequest.status}
--------------------------------------------------

Our engineering team will review your requirements and get in touch with you shortly.

Best regards,
Custom Websites Team
      `.trim()
    );

    return newRequest;
  }

  public static async getAll(): Promise<WebsiteRequestResponse[]> {
    const res = await pool.query("SELECT * FROM website_requests ORDER BY id DESC");
    return res.rows;
  }

  public static async updateStatus(requestId: number, status: string): Promise<WebsiteRequestResponse | null> {
    const res = await pool.query(
      "UPDATE website_requests SET status = $1 WHERE id = $2 RETURNING *",
      [status, requestId]
    );

    return res.rows[0] || null;
  }
}
