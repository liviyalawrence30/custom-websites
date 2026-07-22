import { Link } from "react-router-dom";
import "../styles/RequestSuccess.css";

function RequestSuccess() {
  return (
    <div className="request-success">
      <div className="success-card">
        <h1>🎉 Request Submitted!</h1>

        <p>
          Thank you for contacting <strong>Custom Websites</strong>.
        </p>

        <p>
          We've received your website requirements successfully.
        </p>

        <p>
          Our team will review your request and contact you within
          24 hours.
        </p>

        <p>
          📧 A confirmation email will be sent shortly.
        </p>

        <Link to="/" className="home-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default RequestSuccess;