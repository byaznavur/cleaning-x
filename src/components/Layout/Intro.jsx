import "./style.css";

import About from "../about";
import Herro from "../herro";
import OurServices from "../ourservices";
const Intro = () => {
  return (
    <div className="container ">
      <Herro />
      <About />
      <OurServices />
    </div>
  );
};

export default Intro;
