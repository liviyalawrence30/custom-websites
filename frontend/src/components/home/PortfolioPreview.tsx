import { Link } from "react-router-dom";

import { portfolio } from "../../data/portfolio";

import "../../styles/PortfolioPreview.css";

function PortfolioPreview() {
  return (
    <section className="portfolio-preview">
      <div className="portfolio-container">
        <h2>Recent Projects</h2>

        <p className="portfolio-subtitle">
          Explore a few examples of the websites we build for businesses and professionals.
        </p>

        <div className="portfolio-grid">
          {portfolio.slice(0, 3).map((project) => (
            <div key={project.id} className="portfolio-card">
              <img
                src={project.image}
                alt={project.title}
                className="portfolio-preview-image"
              />

              <div className="portfolio-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <Link to="/portfolio" className="portfolio-btn">
          View Full Portfolio
        </Link>
      </div>
    </section>
  );
}

export default PortfolioPreview;