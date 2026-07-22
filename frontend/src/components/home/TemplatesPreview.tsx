import { Link } from "react-router-dom";
import TemplateCard from "../common/TemplateCard";


import "../../styles/TemplatesPreview.css";
import { templates } from "../../data/templates";



function TemplatesPreview() {
  return (
    <section className="templates-preview">
      <div className="templates-container">
        <h2>Website Templates</h2>

        <p className="templates-subtitle">
          Choose a design that matches your business and we'll customize it to
          fit your brand.
        </p>

        <div className="templates-grid">
          {templates.slice(0, 3).map((template, index) => (
            <TemplateCard
              key={index}
              image={template.image}
              title={template.title}
              description={template.description}
            />
          ))}
        </div>
        <Link to="/templates" className="view-templates-btn">
          View All Templates
        </Link>
      </div>
    </section>
  );
}

export default TemplatesPreview;