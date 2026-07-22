import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PricingCard from "../components/common/PricingCard";
import { pricingPlans } from "../data/pricing";
import "../styles/Pricing.css";

function Pricing() {
  return (
    <>
      <Navbar />
      <section className="pricing-page">
        <div className="pricing-container">
          <h2>Pricing Plans</h2>

          <p className="pricing-subtitle">
            Choose the best pricing plan for your business.
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
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Pricing;