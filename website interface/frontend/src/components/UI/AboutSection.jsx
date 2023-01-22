import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to car Information service</h2>
              <p className="section__description">
              A website that detects license plates of cars would use image recognition technology to scan and identify the characters on a license plate. The website could be used for a variety of purposes, such as tracking the movement of vehicles in a parking lot or monitoring traffic on a busy street. The user would simply need to upload an image of the car, and the website's algorithm would process the image and extract the license plate number. The website could also be integrated with databases to check the license plate against a list of stolen vehicles or vehicles with outstanding fines. The website could also be used to track traffic flow in a city, by counting the cars that pass through a certain area. With the help of this technology, it could also be used for the purpose of tracking the movement of the vehicle in real-time, thus providing a great help to transportation companies and as well as for security reasons.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> get car Informations 
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> locate car places
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Know more about your car 
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>  Know more about your car 
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
