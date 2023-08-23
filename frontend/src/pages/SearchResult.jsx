import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { useLocation } from "react-router-dom";

import TourCard from "../shared/TourCard";
import CommonSection from "../shared/CommonSection";
import NewsLetter from "../shared/NewsLetter";

const SearchResult = () => {
  const location = useLocation();

  const [data] = useState(location.state);

  console.log(data);

  return (
    <>
      <CommonSection title={"Tour Search Result"} />
      <section>
        <Container>
          <Row>
            {data.length === 0 ? (
              <h4 className="text-center">Tour not found for your choice</h4>
            ) : (
              data?.map((tour) => (
                <Col lg="3" className="mb-4" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
      <NewsLetter />
    </>
  );
};

export default SearchResult;
