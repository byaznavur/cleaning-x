import "./style.css";
import messageImg from "../../assets/image/message-img.png";
import phoneImg from "../../assets/image/phone.png";
const Message = () => {
  return (
    <div className="message container">
      <div className="message-img">
        <img src={messageImg} alt="" />
      </div>

      <div className="message-info">
        <span>Covid-19 sanitization</span>
        <h2>We follow guidelines to keep you safe from the COVID-19 virus</h2>
        <p>
          Lobortis mattis odio leo eget mauris met aliquet semper molestie
          sollicitudin congue massa mauris lectus.
        </p>

        <div className="herroCalling">
          <button>Get a free quote</button>

          <div className="callNumber">
            <img src={phoneImg} alt="" />
            <div className="numInfo">
              <span>CALL US NOW</span>
              <br />
              <a style={{ color: "#fff" }} href="#">
                (414) 567 - 2109
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
