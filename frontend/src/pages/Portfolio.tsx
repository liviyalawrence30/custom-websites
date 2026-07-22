import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { portfolio } from "../data/portfolio";
import "../styles/Portfolio.css";

function Portfolio() {
  return (
    <>
      <Navbar />

      <section className="portfolio-page">
        <div className="section-container">
          <h1>Customer Portfolio & Showcase</h1>

          <p className="portfolio-intro">
            Explore recent custom websites built for our clients, complete with
            screenshots, feature breakdowns, and live demonstrations.
          </p>

          {portfolio.map((project) => (
            <div className="portfolio-project" key={project.id}>
              <div className="portfolio-header">
                <h2>{project.title}</h2>
                <span className="client-badge">
                  Client: {project.client}
                </span>
              </div>

              <div className="portfolio-screenshot-container">
                <img
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  className="portfolio-image"
                />
              </div>

              <div className="portfolio-content">
                <h3>Project Overview</h3>
                <p>{project.description}</p>

                

                <h3>Ideal For</h3>
                <ul className="portfolio-list">
                  {project.idealFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                

                <div className="portfolio-actions">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="demo-button"
                  >
                    🌐 View Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Portfolio;