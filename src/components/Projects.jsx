import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.jpg";
import projImg6 from "../assets/img/project-img6.png";
import U from "../assets/img/U.svg";
import cert1 from "../assets/img/cert1.png";
import cert2 from "../assets/img/cert2.png";
import cert3 from "../assets/img/cert3.png";
import cert4 from "../assets/img/cert4.png";
import Carousel from "react-multi-carousel";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const responsive = {
    superLargeDesktop: {
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

  const projects = [
    {
      title: "TikTok Projects ",
      description:
        "Using machine learning models to increase response time and system efficiency by automating the initial stages of the claims process.",
      imgUrl: projImg1,
      link: "https://github.com/YONGCACO3/TikTok_Project",
    },
    {
      title: "K-Means Color Compression",
      description:
        "Apply K-means clustering to group pixels in a photograph and explore DBSCAN clustering.",
      imgUrl: projImg2,
      link: "https://github.com/YONGCACO3/K-means-for-color-compressiont",
    },
    {
      title: "Mushroom Classification App",
      description:
        "A web app where users can choose between different classifiers and visualize the classification results.",
      imgUrl: projImg3,
      link: "https://github.com/YONGCACO3/Mushroom-Classification-App",
    },
    {
      title: "Employee Retention Project",
      description:
        "Using machine learning models to predict employees' retention and identify key factors leading to their departures.",
      imgUrl: projImg4,
      link: "https://github.com/YONGCACO3/Employee_Retention_Project",
    },
    {
      title: "Facial Expression Recognition",
      description: "Facial Expression Recognition with Keras",
      imgUrl: projImg5,
      link: "https://github.com/YONGCACO3/TikTok_Project",
    },
    {
      title: "Credit Card Default Analysis ",
      description:
        "Using Power BI to explore factors influencing credit card defaults and uncover trends that could impact future decisions.",
      imgUrl: projImg6,
      link: "https://app.powerbi.com/view?r=eyJrIjoiZDA3YzE2MGMtMWNkYS00ZDAzLWI0NzMtZTYwYzhjYTY3YzZjIiwidCI6ImE4ZWVjMjgxLWFhYTMtNGRhZS1hYzliLTlhMzk4YjkyMTVlNyIsImMiOjN9",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects & Certificates </h2>
            <p>
              Explore a selection of my hands-on projects and certifications
              showcasing proficiency in data analytics, machine learning, and
              cloud computing.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first"> Certificates </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Highlights</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <Carousel
                    responsive={responsive}
                    infinite={true}
                    className="owl-carousel owl-theme skill-slider"
                  >
                    <div className="item">
                      <a
                        target="_blank"
                        href="https://www.credly.com/badges/7d238eaf-bb31-4b17-96a1-17f2b7315263"
                        className="image-link"
                      >
                        <img src={cert1} alt="Image" />
                      </a>
                      <h5 className="text-center">
                        AWS Certified <br></br>Cloud Practitioner
                      </h5>
                    </div>
                    <div className="item">
                      <a
                        target="_blank"
                        href="https://www.credential.net/d16ae3b4-a4d6-4644-bd44-5ff172030410?key=b0bb18104bef71c9f91cd8395cfbc82dd1c8025cd2b8879571863c2f5c35c4e1"
                        className="image-link"
                      >
                        <img src={cert2} alt="Image" />{" "}
                      </a>
                      <h5 className="text-center">
                        Google Cloud Certified <br></br>Cloud Digital Leader
                      </h5>
                    </div>
                    <div className="item">
                      <a
                        target="_blank"
                        href="https://www.credly.com/badges/c28c2282-746f-43f2-b7ad-c5d364aba297"
                        className="image-link"
                      >
                        <img src={cert3} alt="Image" />{" "}
                      </a>
                      <h5 className="text-center">
                        Google <br></br>Advanced Analytics Certificate
                      </h5>
                    </div>
                    <div className="item">
                      <a
                        target="_blank"
                        href="https://www.credly.com/badges/c28c2282-746f-43f2-b7ad-c5d364aba297"
                        className="image-link"
                      >
                        <img src={cert4} alt="Image" />{" "}
                      </a>
                      <h5 className="text-center">
                        Machine Learning <br></br>Specialization
                      </h5>
                    </div>
                  </Carousel>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img
                    src={U}
                    alt="Under Construction"
                    style={{
                      width: "800px",
                      height: "500px",
                      margin: "auto",
                      display: "block",
                    }}
                  />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
};
