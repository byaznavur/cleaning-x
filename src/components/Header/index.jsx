import "./style.css";
import logo from "../../assets/image/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

import { useState } from "react";
const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleBtn = () => {
    setOpen(!open);
  };

  return (
    <header>
      <nav className="container navbar">
        <a href="#">
          <img src={logo} alt="" />
        </a>

        <ul className={`${open ? "show-list" : "list"}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Articles</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Cart (0)</a>
          </li>
          <li>
            <a href="#">Get a free quote</a>
          </li>
        </ul>

        <button onClick={toggleBtn} className="btnBurger">
          {open ? <IoClose /> : <GiHamburgerMenu />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
