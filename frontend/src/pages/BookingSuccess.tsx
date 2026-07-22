import { Link } from "react-router-dom";
import "../styles/BookingSuccess.css";

function BookingSuccess() {
  return (
    <div className="booking-success">
      <div className="success-card">
        <h1>🎉 Booking Confirmed!</h1>

        <p>
          Thank you for booking your discovery call with <strong>Custom Websites</strong>.
        </p>

        <p>
          We've received your booking successfully.
        </p>

        <p>
          📧 A confirmation email will be sent to your registered email address shortly.
        </p>

        <Link to="/" className="home-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default BookingSuccess;