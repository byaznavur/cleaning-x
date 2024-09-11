import "./style.css";
import img1 from "../../assets/image/card1.png";
import img2 from "../../assets/image/card2.png";
import img3 from "../../assets/image/card3.png";
import AboutCard from "../cards/aboutcard";
const About = () => {
  const cards = [
    {
      img: img1,
      title: "1. Schedule online",
      desc: "Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.",
    },
    {
      img: img2,
      title: "2. Pay online easily",
      desc: "Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.",
    },
    {
      img: img3,
      title: "3. Get your house cleaned",
      desc: "Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.",
    },
  ];

  const cardsStyle = {
    backgroundColor: "#000",
    color: "#fff",
  };
  return (
    <div className="about">
      <div className="about-info">
        <h2>About Us</h2>
        <p>
          Sagittis nibh scelerisque vitae eget vulputate sem elementum sed{" "}
          <br /> neque nisi felis non ultrices massa id egestas quam velit
          pretium nu.
        </p>
      </div>
      <div className="about-cards">
        {cards.map((card, i) => (
          <AboutCard {...card} cardsStyle={cardsStyle} key={i} />
        ))}
      </div>
      <div className="about-btn">
        <button>Get a free quote</button>
        <button>Explore services</button>
      </div>
    </div>
  );
};

export default About;
