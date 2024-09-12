import "./style.css";

import About from "../about";
import Herro from "../herro";
import OurServices from "../ourservices";
import Message from "../message";
import Articles from "../articles";
import Contact from "../contact";
const Intro = () => {
  return (
    <div className="container ">
      <Herro />
      <About />
      <OurServices />
      <Message />
      <Articles />
      <Contact />
    </div>
  );
};

export default Intro;
