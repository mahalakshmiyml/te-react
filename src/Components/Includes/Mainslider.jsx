import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image1 from "../Images/slider/quiet.png";
import Image2 from "../Images/slider/pursuit.png";
import Image3 from "../Images/slider/windmill.png";
import Image4 from "../Images/slider/rain.png";
import Image5 from "../Images/slider/fly.png";
import Image6 from "../Images/slider/fairaway.png"
import OwlCarousel from "react-owl-carousel";

const MainSlider = () => {
  const associations = [
    {
      id: 1,
      ImageUrl: Image1,
      alt: "",
      link: "/projects/avalon-park",
      title: "Total Environment In That Quiet Earth @ 1.24 Cr* Onwards",
      specification: "2, 3 & 4BHK Apartments & Villas Off Hennur Road",
      price: "",
    },
    {
      id: 2,
      ImageUrl: Image2,
      alt: "",
      link: "/projects/meridian-park",
      title: "Meridian Park - Prestige City",
      specification: "Excl. 3BHK Apartments",
      price: "87L* Onwards",
    },
    {
      id: 3,
      ImageUrl: Image3,
      alt: "",
      link: "/projects/eden-park",
      title: "Eden Park - Prestige City",
      specification: "1 & 2BHK Apartments",
      price: "39.99L* Onwards",
    },
    {
      id: 4,
      ImageUrl: Image4,
      alt: "",
      link: "/projects/aspen-greens",
      title: "Aspen Greens - Prestige City",
      specification: "4BHK Villas",
      price: "3.2Cr* Onwards",
    },
    {
      id: 5,
      ImageUrl: Image5,
      alt: "",
      link: "/projects/great-acres",
      title: "Great Acres - Prestige City",
      specification: "Plots",
      price: "79.99L* Onwards",
    },
    {
      id: 6,
      ImageUrl: Image6,
      alt: "",
      link: "/projects/great-acres",
      title: "Great Acres - Prestige City",
      specification: "Plots",
      price: "79.99L* Onwards",
    },
  ];

  const options = {
    rewind: true,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 2,
        nav: false,
        loop: false,
      },
    },
  };

  return (
    <div>
      <OwlCarousel options={options}>
        {associations.map((item, index) => (
          <div className="mx-2" key={index}>
            <Container>
            <Row>
              <Col md={12}>
                {/* <Link to={item.link}> */}
                  <div className="text-center">
                    <Image
                      src={item.ImageUrl}
                      alt={item.alt}
                      className="img-fluid"
                    />
                  </div>
                  <div className="position-absolute bottom-0 start-50 translate-middle-x bg-dark text-white p-2 opacity-75 text-center">
                    <Link to={item.link} className="text-decoration-none text-white"><h2 className="opacity-100 fs-5 fw-bold">{item.title}</h2></Link>
                    <h3 className="opacity-100 fs-6 fw-bold">{item.price}</h3>
                    <h3 className="fs-6">{item.specification}</h3>
                  </div>
                {/* </Link> */}
              </Col>
            </Row>
            </Container>
          </div>
        ))}
      </OwlCarousel>

      {/* <div className="bg-light position-relative rounded" id="custom-content">
        <Container className="bg-white shadow p-3 position-absolute top-50 start-50 translate-middle">
          <Row className="justify-content-center">
            <Col
              md={4}
              className="col-md-4 align-self-center d-none d-md-block"
            >
              <div className="text-center">
                <Image
                  src={Logo}
                  alt=""
                  className="img-fluid"
                  style={{ height: "125px" }}
                />
              </div>
            </Col>
            <Col md={8} className="">
              <Row className="">
                <Col md={6} className="">
                  <div className="m-1 text-center text-md-start">
                    <h2>Prestige City Projects</h2>
                    <p className="m-0 fw-bold text-center text-md-start">
                      {" "}
                      3 & 4 BHK Villas Starts @ 3.5 Cr* Onwards
                    </p>
                    <p className="text-center text-md-start">
                      {" "}
                      Sarjapur Rd, Bangalore
                    </p>
                  </div>
                </Col>
                <Col md={6} className="align-self-center">
                  <div className="text-center text-md-start">
                    <a
                      href="javascript"
                      className="btn btn-primary m-1 text-uppercase ps-5 pe-5 pt-2 pb-2"
                      data-bs-toggle="modal" 
                      data-bs-target="#modal" rel="noreferrer noopener"
                    >
                      Download Brochure
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div> */}
    </div>
  );
};

export default MainSlider;
