import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import TestimonialCard from "../components/common/TestimonialCard";
import { testimonials } from "../data/testimonials";
import "../styles/Testimonials.css";

function Reviews() {
  return (
    <>
      <Navbar />
      <section className="testimonials">
        <h2>Customer Reviews</h2>

        <p className="testimonials-subtitle">
          Here's what our customers say about us.
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
      <Footer />
    </>
  );
}

export default Reviews;