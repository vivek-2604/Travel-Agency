import React from "react";
import TourCard from "../../shared/TourCard";
import { Col } from "reactstrap";
import useFetch from "../../hooks/useFetch";

const FeatedToursList = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL
  console.log(baseUrl);
  const {
    data: featuredTours,
    loading,
    error,
  } = useFetch(`${baseUrl}/tours/getFeaturedTours/`);

  return (
    <>
      {loading && <h4>Loading....</h4>}
      {error && <h4>{error}</h4>}
      {!loading &&
        !error &&
        featuredTours?.map((tour) => (
          <Col className="mb-4" lg="3" md="6" sm="6" key={tour._id}>
            <TourCard tour={tour} />
          </Col>
        ))}
    </>
  );
};

export default FeatedToursList;
