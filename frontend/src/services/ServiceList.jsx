import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Wather",
    desc: "A vivid sunset paints the sky in warm hues over a tranquil coastal scene.",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Comprehensive guide image illustrating step-by-step instructions",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Sunset hues cast a warm embrace over an idyllic coastal village",
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
