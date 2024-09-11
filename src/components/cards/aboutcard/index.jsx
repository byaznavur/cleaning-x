import "./style.css";
const AboutCard = ({ img, title, desc }) => {
  console.log(img);

  return (
    <div className="card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default AboutCard;
