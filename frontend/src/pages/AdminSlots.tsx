import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import AdminNavbar from "../components/admin/AdminNavbar";
import api from "../api/api";
import "../styles/AdminSlots.css";

interface Slot {
  id: number;
  date: string;
  time: string;
  is_available: boolean;
}

function AdminSlots() {
  const [slots, setSlots] = useState<Slot[]>([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");

  useEffect(() => {
    fetchSlots();
  }, []);

  const fetchSlots = async () => {
    try {
      const response = await api.get("/slots/");
      setSlots(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createSlot = async () => {
    if (!date || !time) {
      alert("Please select date and time.");
      return;
    }

    try {
      await api.post("/slots/", {
        date,
        time,
      });

      setDate("");
      setTime("");

      fetchSlots();
    } catch (error: any) {
      alert(error.response?.data?.detail || "Failed to create slot.");
      console.error(error);
    }
  };

  const deleteSlot = async (id: number) => {
    try {
      await api.delete(`/slots/${id}`);
      fetchSlots();
    } catch (error) {
      console.error(error);
    }
  };

  const filteredSlots = slots.filter((slot) => {
    if (status === "available") return slot.is_available;
    if (status === "booked") return !slot.is_available;
    return true;
  });

  return (
    <>
      <AdminNavbar />

      <section className="slot-page">
        <h1>
          {status === "booked"
            ? "Booked Slots"
            : "Manage Available Slots"}
        </h1>

        {status !== "booked" && (
          <div className="slot-form">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              <option value="">Select Time</option>
              <option>09:00 AM</option>
              <option>10:00 AM</option>
              <option>11:00 AM</option>
              <option>02:00 PM</option>
              <option>03:00 PM</option>
              <option>04:00 PM</option>
            </select>

            <button onClick={createSlot}>
              Add Slot
            </button>
          </div>
        )}

        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>

                {status !== "booked" && (
                  <th>Action</th>
                )}
              </tr>
            </thead>

            <tbody>
              {filteredSlots.map((slot) => (
                <tr key={slot.id}>
                  <td>{slot.date}</td>
                  <td>{slot.time}</td>
                  <td>
                    <span className={`status-pill ${slot.is_available ? "status-available" : "status-booked"}`}>
                      {slot.is_available ? "Available" : "Booked"}
                    </span>
                  </td>

                  {status !== "booked" && (
                    <td>
                      <button
                        onClick={() => deleteSlot(slot.id)}
                      >
                        Delete
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default AdminSlots;