import React from "react";
import Slider from "react-slick";

import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    inifinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slideToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slideToShow: 2,
          slideToScroll: 1,
          inifinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slideToShow: 1,
          slideToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          Embarking on a journey with this travel company was a transformative
          experience. Their meticulous planning and exceptional service ensured
          every moment was an unforgettable adventure. Grateful for the
          cherished memories and looking forward to more journeys ahead!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h5 className="mb-0 mt-3">john Doe</h5>
            <p> customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Embarking on a journey with this travel company was a transformative
          experience. Their meticulous planning and exceptional service ensured
          every moment was an unforgettable adventure. Grateful for the
          cherished memories and looking forward to more journeys ahead!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h5 className="mb-0 mt-3">Lia Franklin</h5>
            <p> customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Embarking on a journey with this travel company was a transformative
          experience. Their meticulous planning and exceptional service ensured
          every moment was an unforgettable adventure. Grateful for the
          cherished memories and looking forward to more journeys ahead!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h5 className="mb-0 mt-3">john Cena</h5>
            <p> customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
