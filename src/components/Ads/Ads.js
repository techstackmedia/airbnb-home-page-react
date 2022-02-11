import ads1 from "../../images/ads-1.png";
import ads2 from "../../images/ads-2.png";
import ads3 from "../../images/ads-3.png";
import star from "../../images/star.png";

const Ads = () => {
  return (
    <section className="ads">
      <div className="box ads-1">
        <div className="tag">Sold out</div>
        <img className="ads-img" src={ads1} alt="" /> <br />
        <img src={star} alt="star review" width="16px" />
        <span>
          {" "}
          5.0 <span className="rate">(6).USA</span>
        </span>{" "}
        <br />
        <span className="feature">Life lessons with Katie Zaferes</span> <br />
        <span>
          <strong>From $136</strong> / person
        </span>
      </div>
      <div className="box ads-2">
        <div className="tag">Online</div>
        <img className="ads-img" src={ads2} alt="" /> <br />
        <img src={star} alt="star review" width="16px" />
        <span>
          {" "}
          5.0 <span className="rate">(30).USA</span>
        </span>{" "}
        <br />
        <span className="feature">Learn wedding photography</span> <br />
        <span>
          <strong>From $125</strong> / person
        </span>
      </div>
      <div className="box ads-3">
        <img className="ads-img" src={ads3} alt="" /> <br />
        <img src={star} alt="star review" width="16px" />
        <span>
          {" "}
          4.8 <span className="rate">(2).USA</span>
        </span>{" "}
        <br />
        <span className="feature">Group Mountain Biking</span> <br />
        <span>
          <strong>From $50</strong> / person
        </span>
      </div>
    </section>
  );
};

export default Ads;
