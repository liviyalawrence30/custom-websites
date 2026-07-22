import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AdminNavbar from "../components/admin/AdminNavbar";
import api from "../api/api";
import "../styles/AdminDashboard.css";

function AdminDashboard() {
  const [websiteRequestCount, setWebsiteRequestCount] = useState(0);
  const [bookingCount, setBookingCount] = useState(0);
  const [availableSlots, setAvailableSlots] = useState(0);
  const [bookedSlots, setBookedSlots] = useState(0);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await api.get("/dashboard/stats");

      setWebsiteRequestCount(response.data.website_requests);
      setBookingCount(response.data.bookings);
      setAvailableSlots(response.data.available_slots);
      setBookedSlots(response.data.booked_slots);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <AdminNavbar />

      <section className="dashboard">
        <h1>Welcome, Admin 👋</h1>

        <div className="dashboard-cards">
          <Link to="/admin/requests" className="dashboard-card">
            <h2>Website Requests</h2>
            <p>{websiteRequestCount}</p>
          </Link>

          <Link to="/admin/bookings" className="dashboard-card">
            <h2>Bookings</h2>
            <p>{bookingCount}</p>
          </Link>

          <Link
            to="/admin/slots?status=available"
            className="dashboard-card"
          >
            <h2>Available Slots</h2>
            <p>{availableSlots}</p>
          </Link>

          <Link
            to="/admin/slots?status=booked"
            className="dashboard-card"
          >
            <h2>Booked Slots</h2>
            <p>{bookedSlots}</p>
          </Link>
        </div>
      </section>
    </>
  );
}

export default AdminDashboard;