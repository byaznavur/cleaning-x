import phoneImg from "../../assets/image/phone.png";
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
        <p>
          Massa bibendum consectetur maurisid gravida purus, dolor dui amet
          morbi non nunc urna purus diam.
        </p>

        <button>Browse our packages</button>
      </div>
      <div className="contact-form">
        <form>
          <label>
            <input type="text" />
          </label>
          <label>
            <input type="text" />
          </label>
          <label>
            <input type="text" />
          </label>
          <label>
            <input type="text" />
          </label>
          <label>
            <input type="text" />
          </label>
          <label>
            <input type="text" />
          </label>
          <label>
            <textarea type="text" />
          </label>
          <button>Submit message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
