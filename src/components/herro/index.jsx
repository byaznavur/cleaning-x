import "./style.css";
import herroImg from "../../assets/image/herroImg.png";
import phoneImg from "../../assets/image/phone.png";
const Herro = () => {
  return (
    <div className="herroWrapper">
      <div className="herroInfo">
        <h1>Quality cleaning for your home</h1>
        <p>
          Condimentum mauris sit cursus amet id non neque pharetra nulla ornare
          sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et
          nulla magna lacus penatibus.
        </p>

        <div className="herroCalling">
          <button>Get a free quote</button>

          <div className="callNumber">
            <img src={phoneImg} alt="" />
            <div className="numInfo">
              <span>CALL US NOW</span>
              <br />
              <a href="#">(414) 567 - 2109</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={herroImg} alt="" />
      </div>
    </div>
  );
};

export default Herro;
