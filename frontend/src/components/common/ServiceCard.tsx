type ServiceCardProps = {
  title: string;
  description: string;
};

function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="service-card">
      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;