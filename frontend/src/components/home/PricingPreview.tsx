import { Link } from "react-router-dom";
import "../../styles/PricingPreview.css";
import { pricingPlans } from "../../data/pricing";
import PricingCard from "../common/PricingCard";

function PricingPreview() {
  return (
    <section className="pricing-preview">
      <div className="pricing-container">
        <h2>Pricing Plans</h2>

        <p className="pricing-subtitle">
          Choose the perfect plan for your business.
        </p>

        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              title={plan.title}
              price={plan.price}
              features={plan.features}
              featured={plan.title === "Standard"}
            />
          ))}
        </div>

        <Link to="/pricing" className="view-pricing-btn">
          View Detailed Pricing
        </Link>
      </div>
    </section>
  );
}

export default PricingPreview;