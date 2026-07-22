type TemplateCardProps = {
  image: string;
  title: string;
  description: string;
};

function TemplateCard({
  image,
  title,
  description,
}: TemplateCardProps) {
  return (
    <div className="template-card">
      <img
        src={image}
        alt={title}
        className="template-image"
      />

      <div className="template-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default TemplateCard;