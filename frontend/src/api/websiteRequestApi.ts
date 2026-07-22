import axios from "axios";

const API_URL = "http://localhost:8000"; // Change this if your backend uses a different port

export const updateWebsiteRequestStatus = (
  requestId: number,
  status: string
) => {
  return axios.put(`${API_URL}/website-requests/${requestId}/status`, {
    status,
  });
};