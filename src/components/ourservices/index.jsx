import "./style.css";
import OurCard from "../cards/ourcard";
import img1 from "../../assets/image/our1.png";
import img2 from "../../assets/image/our2.png";
import img3 from "../../assets/image/our3.png";
const OurServices = () => {
  const services = [
    {
      img: img1,
      title: "House cleaning",
      desc: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.",
    },
    {
      img: img2,
      title: "Office cleaning",
      desc: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.",
    },
    {
      img: img3,
      title: "Industrial cleaning",
      desc: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.",
    },
  ];
  return (
    <div className="our-services ">
      <div className="our-info">
        <h2>Our Services</h2>
        <button>Explore services</button>
      </div>
      <div className="our-cards">
        {services.map((service, i) => (
          <OurCard {...service} key={i} />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
