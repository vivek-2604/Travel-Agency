import React from "react";
import TourCard from "../../shared/TourCard";

import { Col } from "reactstrap";

import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";

const FeatedToursList = () => {
  const {
    data: featuredTours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours/getFeaturedTours`);

  return (
    <>
      {loading && <h4>Loading....</h4>}
      {error && <h4>{error}</h4>}
      {!loading &&
        !error &&
        featuredTours?.map((tour) => (
          <Col className="mb-4" lg="3" key={tour._id}>
            <TourCard tour={tour} />
          </Col>
        ))}
    </>
  );
};

export default FeatedToursList;
