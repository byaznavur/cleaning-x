import "./style.css";
const OurCard = ({ img, title, desc }) => {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default OurCard;
