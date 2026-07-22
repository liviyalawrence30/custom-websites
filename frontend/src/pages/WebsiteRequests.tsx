import { useEffect, useState } from "react";
import AdminNavbar from "../components/admin/AdminNavbar";
import api from "../api/api";
import "../styles/WebsiteRequests.css";

interface WebsiteRequest {
  id: number;
  name: string;
  email: string;
  phone: string;
  business_name: string;
  website_type: string;
  number_of_pages: string;
  feature_needs: string;
  hosting: boolean;
  maintenance_frequency: string;
  seo_level: string;
  discovery_call: boolean;
  budget: string;
  description: string;
  status: string;
}

function WebsiteRequests() {
  const [websiteRequests, setWebsiteRequests] = useState<WebsiteRequest[]>([]);

  useEffect(() => {
    fetchWebsiteRequests();
  }, []);

  const fetchWebsiteRequests = async () => {
    try {
      const response = await api.get("/website-requests/");
      setWebsiteRequests(response.data);
    } catch (error) {
      console.error("Failed to fetch website requests:", error);
    }
  };

  const handleStatusChange = async (
    requestId: number,
    newStatus: string
  ) => {
    try {
      await api.put(`/website-requests/${requestId}/status`, {
        status: newStatus,
      });

      // Update UI without refreshing
      setWebsiteRequests((prev) =>
        prev.map((request) =>
          request.id === requestId
            ? { ...request, status: newStatus }
            : request
        )
      );

      alert("Status updated successfully!");
    } catch (error) {
      console.error("Failed to update status:", error);
      alert("Failed to update status.");
    }
  };

  return (
    <>
      <AdminNavbar />

      <section className="table-page">
        <h1>Website Requests</h1>

        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Business</th>
                <th>Website</th>
                <th>Pages</th>
                <th>Features</th>
                <th>Hosting</th>
                <th>Maintenance</th>
                <th>SEO</th>
                <th>Discovery Call</th>
                <th>Status</th>
                <th>Budget</th>
              </tr>
            </thead>

            <tbody>
              {websiteRequests.map((request) => (
                <tr key={request.id}>
                  <td>{request.name}</td>
                  <td>
                    <a href={`mailto:${request.email}`} className="email-link">
                      {request.email}
                    </a>
                  </td>
                  <td>{request.business_name}</td>
                  <td>{request.website_type}</td>
                  <td>{request.number_of_pages || "-"}</td>
                  <td>{request.feature_needs || "-"}</td>
                  <td>{request.hosting ? "Yes" : "No"}</td>
                  <td>{request.maintenance_frequency || "-"}</td>
                  <td>{request.seo_level || "-"}</td>
                  <td>{request.discovery_call ? "Yes" : "No"}</td>

                  <td>
                    <select
                      value={request.status}
                      className={`status-select status-${request.status.toLowerCase().replace(/\s+/g, "-")}`}
                      onChange={(e) =>
                        handleStatusChange(request.id, e.target.value)
                      }
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>

                  <td>{request.budget}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default WebsiteRequests;