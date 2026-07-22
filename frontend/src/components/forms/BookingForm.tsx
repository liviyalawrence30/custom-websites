import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../api/api";
import "../../styles/BookingForm.css";

interface Slot {
  id: number;
  date: string;
  time: string;
  is_available: boolean;
}

function BookingForm() {

  const location = useLocation();
const navigate = useNavigate();

const request = location.state?.websiteRequest;
const isFromWebsiteRequest = !!request;
  const [slots, setSlots] = useState<Slot[]>([]);

  const [formData, setFormData] = useState({
    name: request?.name ?? "",
    companyName: request?.business_name ?? "",
    email: request?.email ?? "",
    phone: request?.phone ?? "",
    budgetRange: request?.budget ?? "",
    date: "",
    time: "",
  });

  useEffect(() => {
    fetchSlots();
  }, []);

  const fetchSlots = async () => {
    try {
      const response = await api.get("/slots/");

      setSlots(
        response.data.filter(
          (slot: Slot) => slot.is_available
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    try {
      await api.post("/bookings/", {
        name: formData.name,
        company_name: formData.companyName,
        email: formData.email,
        phone: formData.phone,
        budget_range: formData.budgetRange,
        date: formData.date,
        time: formData.time,
      });

      const selectedSlot = slots.find(
        (slot) =>
          slot.date === formData.date &&
          slot.time === formData.time
      );

      if (selectedSlot) {
        await api.put(`/slots/${selectedSlot.id}/book`);
      }

      alert("Consultation booked successfully!");

      navigate("/booking-success");
    } catch (error) {
      console.error(error);
      alert("Failed to book consultation.");
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Book a Discovery Call</h2>

      <div className="form-group">
        <label>Full Name</label>

       <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  readOnly={isFromWebsiteRequest}
  required
/>
      </div>

      <div className="form-group">
        <label>Company Name</label>

       <input
  type="text"
  name="companyName"
  value={formData.companyName}
  onChange={handleChange}
  readOnly={isFromWebsiteRequest}
  required
/>
      </div>

      <div className="form-group">
        <label>Email</label>

        <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  readOnly={isFromWebsiteRequest}
  required
/>
      </div>

      <div className="form-group">
        <label>Phone Number</label>

        <input
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  readOnly={isFromWebsiteRequest}
  required
/>
      </div>

      <div className="form-group">
        <label>Budget</label>
<input
  type="text"
  name="budgetRange"
  value={formData.budgetRange}
  onChange={handleChange}
  readOnly={isFromWebsiteRequest}
  required
/>
      </div>

      <div className="form-group">
        <label>Select Date</label>

        <select
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        >
          <option value="">Select Date</option>

          {[...new Set(slots.map((slot) => slot.date))].map(
            (date) => (
              <option key={date} value={date}>
                {date}
              </option>
            )
          )}
        </select>
      </div>

      <div className="form-group">
        <label>Select Time</label>

        <select
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        >
          <option value="">Select Time</option>

          {slots
            .filter(
              (slot) => slot.date === formData.date
            )
            .map((slot) => (
              <option key={slot.id} value={slot.time}>
                {slot.time}
              </option>
            ))}
        </select>
      </div>
      <div className="form-checkbox">
  <input
    type="checkbox"
    id="bookingConsent"
    required
  />

  <label htmlFor="bookingConsent">
    I consent to the collection and processing of my personal information for scheduling and managing this discovery call.
  </label>
</div>

      <button type="submit" className="submit-btn">
        Confirm Booking
      </button>
    </form>
  );
}

export default BookingForm;