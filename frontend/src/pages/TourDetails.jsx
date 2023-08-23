import React, { useEffect, useRef, useState, useContext } from "react";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";

import calculateAvgRating from "../utils/calculateAvgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking/Booking";
import NewsLetter from "../shared/NewsLetter";
import { AuthContext } from "./../context/AuthContext";

import { BASE_URL } from "./../utils/config";
import useFetch from "../hooks/useFetch";

import "../styles/tourDetails.css";

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef("");

  const [tourRating, setTourRating] = useState(null);

  const { user } = useContext(AuthContext);

  const {
    data: tour,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours/singletour/${id}`);

  const option = { day: "numeric", month: "long", year: "numeric" };

  const {
    photo,
    title,
    desc,
    price,
    reviews,
    city,
    address,
    distance,
    maxGroupSize,
  } = tour;

  const { avgRating, totalRating } = calculateAvgRating(reviews);

  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    if (!user || !user === "undefine" || !user === null) {
      alert("please sign in");
    } else {
      try {
        console.log(user._doc);
        console.log(reviewText);
        console.log(tourRating);
        const reviewObj = {
          userName: user?.username,
          reviewText: reviewText,
          rating: tourRating,
        };

        const res = await fetch(`${BASE_URL}/review/${id}`, {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          creadentials: "include",
          body: JSON.stringify(reviewObj),
        });

        const result = res.json();
        console.log("HELLLLLLLo");
        console.log("result", result);
      } catch (err) {
        alert(err.message);
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);

  return (
    <>
      <section>
        <Container>
          {loading && <h4 className="text-center pt-5">Loading....</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              <Col lg="8">
                <div className="tour__content">
                  <img src={photo} alt="" />

                  <div className="tour__info">
                    <h2>{title}</h2>
                    <div className="d-flex align-items-center gap-5">
                      <span className="tour__rating d-flex align-items-center gap-1">
                        <i
                          class="ri-star-fill"
                          style={{
                            color: "var(--secondary-color)",
                          }}
                        ></i>
                        {avgRating === 0 ? null : avgRating}
                        {totalRating === 0 ? (
                          "not rated"
                        ) : (
                          <span>({reviews?.length})</span>
                        )}
                      </span>

                      <span>
                        <i class="ri-map-pin-user-fill"></i>
                        {address}
                      </span>
                    </div>

                    <div className="tour__extra-details">
                      <span>
                        <i class="ri-map-pin-2-line"></i>
                        {city}
                      </span>
                      <span>
                        <i class="ri-money-dollar-circle-line"></i>${price} /per
                        person
                      </span>
                      <span>
                        <i class="ri-map-pin-time-line"></i>${distance} k/m
                      </span>
                      <span>
                        <i class="ri-group-line"></i>
                        {maxGroupSize} people
                      </span>
                    </div>

                    <h5>Description</h5>
                    <p>{desc}</p>
                  </div>

                  <div className="tour__reviews mt-4">
                    <h4>Reviews ({reviews?.length} reviews)</h4>

                    <Form onSubmit={submitHandler}>
                      <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                        <span onClick={() => setTourRating(1)}>
                          1<i class="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(2)}>
                          2<i class="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(3)}>
                          3<i class="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(4)}>
                          4<i class="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(5)}>
                          5<i class="ri-star-s-fill"></i>
                        </span>
                      </div>

                      <div className="review__input">
                        <input
                          type="text"
                          ref={reviewMsgRef}
                          placeholder="Share your thoughts"
                        />
                        <button
                          className="btn primary__btn text-white"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </Form>

                    <ListGroup className="user__reviews">
                      {reviews?.map((reviews) => (
                        <div className="review__item">
                          <img src={avatar} alt="" />

                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5>{reviews.username}</h5>
                                <p>
                                  {new Date("08-07-2023").toLocaleDateString(
                                    "en-Us",
                                    option
                                  )}
                                </p>
                              </div>
                              <span className="d-flex align-items-center">
                                {reviews.rating}
                                <i class="ri-star-s-fill"></i>
                              </span>
                            </div>
                            <h6>{reviews.reviewText}</h6>
                          </div>
                        </div>
                      ))}
                    </ListGroup>
                  </div>
                </div>
              </Col>
              <Col lg="4">
                <Booking tour={tour} avgRating={avgRating} />
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <NewsLetter />
    </>
  );
};

export default TourDetails;
