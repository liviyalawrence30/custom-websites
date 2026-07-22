import "../../styles/Testimonials.css";
import { testimonials } from "../../data/testimonials";
import TestimonialCard from "../common/TestimonialCard";

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>

      <p className="testimonials-subtitle">
        We're proud to help businesses grow online.
      </p>

      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            review={testimonial.review}
            name={testimonial.name}
            role={testimonial.role}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;