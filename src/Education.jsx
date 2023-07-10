import ProgressBar from "react-bootstrap/ProgressBar";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Carousel } from "react-bootstrap";

export function Education() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  const now1 = 90;
  const now2 = 75;
  const now3 = 65;
  const now4 = 40;
  return (
    <>
      <h1
        id="Education"
        style={{ color: "white", textAlign: "center", marginTop: "10rem" }}
      >
        Education and Skills
      </h1>
      <div data-aos="fade-down" className="container experience-container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="number-styling">
              <h1 className="number">
                3<span className="dot-education"></span>
              </h1>
              <h3
                style={{
                  color: "white",
                  marginLeft: "2rem",
                  marginBottom: "1rem",
                }}
              >
                Certificates
              </h3>
            </div>
          </div>
          <div className="col-lg-6 col-mid-12 col-sm-12">
            <Carousel interval={null} className="education-carousel">
              <Carousel.Item>
                <img
                  className="education-carousel-img"
                  src="images/Education1.jpg"
                ></img>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="education-carousel-img"
                  src="images/Work1.png"
                ></img>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="education-carousel-img"
                  src="images/Work1.png"
                ></img>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      <hr></hr>

      <h2 className="education-title">My Skills</h2>

      <div
        data-aos="zoom-out"
        className="container text-center education-container "
      >
        <div className="row align-items-center">
          <div className="col col-lg-6 col-md-12 col-sm-12 skill-col">
            <h4> Front-End </h4>
          </div>
          <div className="col col-lg-6 col-md-12 col-sm-12  progress-col">
            <ProgressBar
              variant="danger"
              animated
              now={now1}
              label={`${now1}%`}
            />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col col-lg-6 col-md-12 col-sm-12  skill-col">
            <h4>Back-End</h4>
          </div>
          <div className="col col-lg-6 col-md-12 col-sm-12  progress-col">
            <ProgressBar
              variant="danger"
              animated
              now={now2}
              label={`${now2}%`}
            />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col col-lg-6 col-md-12 col-sm-12  skill-col">
            <h4>Data-Bases</h4>
          </div>
          <div className="col col-lg-6 col-md-12 col-sm-12  progress-col ">
            <ProgressBar
              variant="danger"
              animated
              now={now3}
              label={`${now3}%`}
            />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col col-lg-6 col-md-12 col-sm-12  skill-col">
            <h4>Design</h4>
          </div>
          <div className="col col-lg-6 col-md-12   progress-col">
            <ProgressBar
              variant="danger"
              animated
              now={now4}
              label={`${now4}%`}
            />
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  );
}
