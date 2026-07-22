import { Link } from "react-router-dom";
import "../../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <span className="hero-tag">
          CUSTOM WEBSITE DEVELOPMENT
        </span>

        <h1>
          Build Modern Websites
          <br />
          That Grow Your Business
        </h1>

        <p>
          We create fast, responsive and SEO-friendly websites
          tailored for startups, professionals and growing
          businesses.
        </p>

        <div className="hero-buttons">
          <Link
            to="/plan-website"
            className="hero-btn"
          >
            Start Your Project
          </Link>

          <Link
            to="/portfolio"
            className="hero-outline-btn"
          >
            View Portfolio
          </Link>
        </div>

        <div className="hero-points">
          <span>✓ Responsive</span>
          <span>✓ SEO Optimized</span>
          <span>✓ Fast Delivery</span>
        </div>

      </div>
    </section>
  );
}

export default Hero;