import exp1 from "../assets/img/Exp1.png";
import exp2 from "../assets/img/Exp2.png";
import exp3 from "../assets/img/Exp3.png";
import exp4 from "../assets/img/Exp4.png";
import exp5 from "../assets/img/Exp5.png";
import logo1 from "../assets/img/logo1.png";
import logo2 from "../assets/img/logo2.png";
import logo3 from "../assets/img/logo3.png";
import logo4 from "../assets/img/logo4.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Experiences = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Experiences</h2>
              <p>
                ✨Proven excellence in Project Management and Customer Relations
                within the manufacturing industry. Currently serving as a
                Student Programming Assistant at Northeastern University,
                actively promoting engagement and inclusive programming.
                Demonstrated success in customer retention, expanding networks,
                and effectively executing end-to-end project contracts. Skilled
                in navigating diverse roles and responsibilities with precision.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={exp1} alt="Image" />
                  <h5>Project Manager</h5>
                  <h5>(2013-2017)</h5>
                  <div className="company-info">
                    <img src={logo1} alt="Company Logo" />
                  </div>
                </div>
                <div className="item">
                  <img src={exp2} alt="Image" />
                  <h5>Sales Executive</h5>
                  <h5>(2017-2019)</h5>
                  <div className="company-info">
                    <img src={logo2} alt="Company Logo" />
                  </div>
                </div>
                <div className="item">
                  <img src={exp3} alt="Image" />
                  <h5>Custom Relations Manager</h5>
                  <h5 style={{ marginBottom: "2em" }}>(2019-2022)</h5>
                  <div className="company-info">
                    <img id="logo3-img" src={logo3} alt="Company Logo" />
                  </div>
                </div>
                <div className="item">
                  <img src={exp4} alt="Image" />
                  <h5>Master in Analytics</h5>
                  <h5 style={{ marginBottom: "1em" }}>(2022-Now)</h5>
                  <div className="company-info">
                    <img id="logo4-img" src={logo4} alt="Company Logo" />
                  </div>
                </div>
                <div className="item">
                  <img src={exp5} alt="Image" />
                  <h5>Programming Assistant</h5>
                  <h5 style={{ marginBottom: "1em" }}>(2022-Now)</h5>
                  <div className="company-info">
                    <img id="logo4-img" src={logo4} alt="Company Logo" />
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
