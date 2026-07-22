import { FaStar } from "react-icons/fa";

type TestimonialCardProps = {
  review: string;
  name: string;
  role: string;
  rating?: number;
};

function TestimonialCard({
  review,
  name,
  role,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-stars">
        {Array.from({ length: rating }).map((_, i) => (
          <FaStar key={i} className="star-icon" />
        ))}
      </div>

      <p className="testimonial-text">"{review}"</p>

      <div className="testimonial-author">
        <h4>{name}</h4>
        <span>{role}</span>
      </div>
    </div>
  );
}

export default TestimonialCard;