import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "../styles/tours.css";

import TourCard from "../shared/TourCard";
import CommonSection from "../shared/CommonSection";
import SearchBar from "../shared/SearchBar";
import NewsLetter from "../shared/NewsLetter";

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [data,setData] = useState([])
  // const {
  //   data: tours,
  //   loading,
  //   error,
  // } = useFetch(`${BASE_URL}/tours?page=1`);
  // const { data: tourCount } = useFetch(
  //   `http://localhost:8000/tours/gettourcount`
  // );
  // useEffect(() => {
  //   const pages = Math.ceil(tourCount / 4);
  //   setPageCount(pages);
  //   window.scrollTo(0, 0);
  // }, [page]);

  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      try {
        const res = await fetch(`${BASE_URL}/tours?page=1`);

        if (!res.ok) {
          // setError("failed to fetch");
        }
        const result = await res.json();
        setData(result.data);
        // setLoading(false);
      } catch (err) {
        // setError(err.message);
        // setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <CommonSection title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section>
        <Container className="pt-0">
          {/* {loading && <h4 className="text-center pt-5">Loading...</h4>} */}
          {/* {error && <h4 className="text-center pt-5">{error}</h4>} */}
          {/* {!loading && !error && ( */}
            <Row>
              {data?.map((tour) => (
                <Col className="mb-4" lg="3" md="6" sm="6" key={tour._id}>
                  <TourCard tour={tour}></TourCard>
                </Col>
              ))}
              <Col lg="12">
                <div className="pagination d-flex mt-4 gap-3 align-items-center justify-content-center">
                  {[...Array(pageCount).keys()].map((number) => (
                    <span
                      key={number}
                      onClick={() => setPage(number)}
                      className={page === number ? "active__page" : ""}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          {/* )} */}
        </Container>
      </section>

      <NewsLetter />
    </>
  );
};

export default Tours;
