import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg_01 from "../assets/images/hero-img01.jpg";
import heroImg_02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";

import Subtitle from "../shared/Subtitle.jsx";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeatedToursList from "../components/FeaturedTours/FeatedToursList";
import MasonaryGalleryImg from "../components/image-gallery/MasonaryGalleryImg";
import Testimonials from "../components/Testimonials/Testimonials";
import NewsLetter from "../shared/NewsLetter";

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex justify-align-content-center ">
                  <Subtitle
                    className="mw-100"
                    subtitle={"Know Before You Go"}
                  />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Traveling opens the door to creating{" "}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Traveling is an exhilarating and transformative experience
                  that opens up a world of opportunities and new perspectives.
                  Stepping away from the familiar confines of our daily lives,
                  we embark on a journey of exploration and discovery.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg_01} alt="heroImg-01" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box hero__video-box mt-4">
                <video src={heroVideo} alt="heroVideo" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg_02} alt="heroImg-02" />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services_subtitle">What we serve</h5>
              <h2 className="services_title">We offer our best service</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col className="mb-5" lg="12">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured toures</h2>
            </Col>
            <FeatedToursList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />

                <h2>
                  With our all experience <br /> we will serve you
                </h2>
                <p>
                  Embarking on a journey, I discovered that each destination
                  holds a unique tapestry of culture, scenery, and memories
                  waiting to be woven together.
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful Trips</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years of experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__image">
                <img src={experienceImg} alt="experienceImg" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <div className="gallery__title">
                Visit our customers tour gallery
              </div>
            </Col>
            <Col lg="12">
              <MasonaryGalleryImg />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      <NewsLetter />
    </>
  );
};

export default Home;
