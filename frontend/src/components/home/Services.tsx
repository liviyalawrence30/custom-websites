import {
  FaLaptopCode,
  FaShoppingCart,
  FaPalette,
  FaTools,
} from "react-icons/fa";
import "../../styles/Services.css";

function Services() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Business Websites",
      description:
        "Professional websites that help businesses establish a strong online presence.",
    },
    {
      icon: <FaShoppingCart />,
      title: "E-Commerce Stores",
      description:
        "Online stores with secure payment integration and seamless shopping experiences.",
    },
    {
      icon: <FaPalette />,
      title: "Portfolio Websites",
      description:
        "Showcase your skills, projects, and achievements with a modern portfolio.",
    },
    {
      icon: <FaTools />,
      title: "Maintenance & Support",
      description:
        "Regular updates, security improvements, and ongoing technical support.",
    },
  ];

  return (
    <section className="services">
      <div className="services-container">
        <h2>Our Services</h2>

        <p className="services-subtitle">
          We provide complete web solutions tailored to your business needs.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;