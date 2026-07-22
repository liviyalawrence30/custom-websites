import { Link } from "react-router-dom";
import "../../styles/CTA.css";

function CTA() {
  return (
    <section className="cta">
      <div className="cta-container">
        <h2>Ready to Build Your Dream Website?</h2>

        <p>
          Let's turn your ideas into a modern, responsive, and professional
          website. Get started today by planning your website or scheduling a
          free consultation.
        </p>

        <div className="cta-buttons">
          <Link to="/plan-website" className="primary-btn">
            Give Your Requirements
          </Link>

          <Link to="/booking" className="secondary-btn">
            Book a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTA;