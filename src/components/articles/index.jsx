import "./style.css";
import article1 from "../../assets/image/articel1.png";
import article2 from "../../assets/image/articel2.png";
const Articles = () => {
  return (
    <div className="container article">
      <div className="article-info">
        <h2>Articles & resources</h2>
        <div className="article-btn">
          <button>Get a free quote</button>
          <button>Browse articles</button>
        </div>
      </div>
      <div className="article-cards">
        <div className="article-card">
          <img src={article1} alt="" />

          <div className="card-table">
            <h3>
              8 best vacuum cleaners to clean any mess for your home in 2022
            </h3>

            <p>
              Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
              quis odio sit sit ac port titor sit males.
            </p>

            <div className="btn-line">
              <span>Jan 28, 2022</span>
              <button>X</button>
            </div>
          </div>
        </div>
        <div className="article-card">
          <img src={article2} alt="" />
          <div className="card-table">
            <h3>
              8 best vacuum cleaners to clean any mess for your home in 2022
            </h3>
            <p>
              Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
              quis odio sit sit ac port titor sit males.
            </p>
            <div className="btn-line">
              <span>Jan 28, 2022</span>
              <button>X</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
