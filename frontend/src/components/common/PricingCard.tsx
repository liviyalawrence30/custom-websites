import { Link } from "react-router-dom";

type PricingCardProps = {
  title: string;
  price: string;
  features: string[];
  featured?: boolean;
};

function PricingCard({
  title,
  price,
  features,
  featured = false,
}: PricingCardProps) {
  return (
    <div className={`pricing-card ${featured ? "featured" : ""}`}>
      <h3>{title}</h3>

      <h1>{price}</h1>

      <ul>
        {features.map((feature, index) => (
          <li key={index}>✔ {feature}</li>
        ))}
      </ul>

      <Link to="/plan-website" className="plan-btn">
        Choose Plan
      </Link>
    </div>
  );
}

export default PricingCard;