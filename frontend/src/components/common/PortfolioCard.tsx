import { Link } from "react-router-dom";

interface PortfolioCardProps {
  project: {
    id: number;
    image: string;
    title: string;
    client: string;
    shortDescription: string;
    demoUrl: string;
  };
}

function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <div className="portfolio-card">
      <img src={project.image} alt={project.title} />

      <h3>{project.title}</h3>

      <h4>{project.client}</h4>

      <p>{project.shortDescription}</p>

      <Link to={project.demoUrl} className="portfolio-link">
        View Website →
      </Link>
    </div>
  );
}

export default PortfolioCard;