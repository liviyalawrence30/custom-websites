import { useEffect, useState } from "react";
import AdminNavbar from "../components/admin/AdminNavbar";
import api from "../api/api";
import "../styles/AdminBookings.css";

interface Booking {
  id: number;
  name: string;
  company_name: string;
  email: string;
  phone: string;
  budget_range: string;
  date: string;
  time: string;
  status: string;
}

function AdminBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await api.get("/bookings/");
      setBookings(response.data);
    } catch (error) {
      console.error("Failed to fetch bookings:", error);
    }
  };

  const handleStatusChange = async (
    bookingId: number,
    newStatus: string
  ) => {
    try {
      await api.put(`/bookings/${bookingId}/status`, {
        status: newStatus,
      });

      setBookings((prev) =>
        prev.map((booking) =>
          booking.id === bookingId
            ? { ...booking, status: newStatus }
            : booking
        )
      );

      alert("Booking status updated successfully!");
    } catch (error) {
      console.error("Failed to update booking status:", error);
      alert("Failed to update booking status.");
    }
  };

  return (
    <>
      <AdminNavbar />

      <section className="table-page">
        <h1>Discovery Call Bookings</h1>

        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Budget</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.name}</td>
                  <td>{booking.company_name}</td>
                  <td>{booking.email}</td>
                  <td>{booking.phone}</td>
                  <td>{booking.budget_range}</td>
                  <td>{booking.date}</td>
                  <td>{booking.time}</td>

                  <td>
                    <select
                      value={booking.status}
                      className={`status-select status-${(booking.status || "Pending").toLowerCase().replace(/\s+/g, "-")}`}
                      onChange={(e) =>
                        handleStatusChange(
                          booking.id,
                          e.target.value
                        )
                      }
                    >
                      <option value="Pending">Pending</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default AdminBookings;