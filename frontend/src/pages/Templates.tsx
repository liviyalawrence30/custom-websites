import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import TemplateCard from "../components/common/TemplateCard";
import { templates } from "../data/templates";
import "../styles/Templates.css";

function Templates() {
  return (
    <>
      <Navbar />
      <section className="templates-page">
        <div className="templates-container">
          <h2>All Website Templates</h2>

          <p className="templates-subtitle">
            Choose a website template and we'll customize it for your business.
          </p>

          <div className="templates-grid">
            {templates.map((template) => (
              <TemplateCard
                key={template.id}
                image={template.image}
                title={template.title}
                description={template.description}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Templates;