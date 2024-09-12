import phoneImg from "../../assets/image/phone.png";
import "./style.css";
const Contact = () => {
  return (
    <div className="contact container">
      <div className="contact-info">
        <h1>Contact Us</h1>
        <p>
          In dignissim euismod pretium amet enim a eu nam ut urna accumsan
          pellentesque lacus duis pharetra eutortor.
        </p>

        <div className="callNumber">
          <img src={phoneImg} alt="" />
          <div className="numInfo">
            <span>CALL US NOW</span>
            <br />
            <a href="#">(414) 567 - 2109</a>
          </div>
        </div>
        <h3>Not convinced yet?</h3>
        <span>
          Massa bibendum consectetur maurisid gravida purus, dolor dui amet
          morbi non nunc urna purus diam.
        </span>

        <button>Browse our packages</button>
      </div>
      <div className="contact-form">
        <form className="service-form">
          <div className="form-group">
            <input
              type="text"
              name="fullname"
              placeholder="Full name"
              className="input-field"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              className="input-field"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="input-field"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input-field"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="service"
              placeholder="Requested service"
              className="input-field"
            />
            <input
              type="date"
              name="date"
              placeholder="Day of service"
              className="input-field"
            />
          </div>
          <div className="textarea-group">
            <textarea
              name="message"
              placeholder="Your message..."
              className="message-box"
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
