import "./style.css";
import logo from "../../assets/image/logo.png";
const Header = () => {
  return (
    <header>
      <div className="container header">
        <div className="menu">
          <div className="logo">
            <a href="#">
              <img src={logo} alt="" />
            </a>
          </div>

          <ul className="list">
            <li className="list-item">
              <a className="list-item-link" href="#">
                Home
              </a>
            </li>
            <li className="list-item">
              <a className="list-item-link" href="#">
                About
              </a>
            </li>
            <li className="list-item">
              <a className="list-item-link" href="#">
                Services
              </a>
            </li>
            <li className="list-item">
              <a className="list-item-link" href="#">
                Articles
              </a>
            </li>
            <li className="list-item">
              <a className="list-item-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="cart">
          <p className="cart-shop">
            Cart <span>(0)</span>
          </p>

          <button className="cart-btn">Get a free quote</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
