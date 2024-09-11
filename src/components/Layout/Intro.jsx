import "./style.css";

import About from "../about";
import Herro from "../herro";
import OurServices from "../ourservices";
import Message from "../message";
const Intro = () => {
  return (
    <div className="container ">
      <Herro />
      <About />
      <OurServices />
      <Message />
    </div>
  );
};

export default Intro;
