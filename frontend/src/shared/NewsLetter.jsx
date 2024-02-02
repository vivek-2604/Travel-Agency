import "./newsLetter.css";
import { Col, Row, Container } from "reactstrap";

import maleTourist from "../assets/images/male-tourist.png";
import { useState } from "react";
import { BASE_URL } from "./../utils/config";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/subscribe`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        console.log("DONNNEE");
      } else {
        console.log("Something Went Wronggg");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe now to get useful travelling information</h2>

              <div className="newsletter__input">
                <input
                  type="email"
                  placeholder="Entye your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="btn newsletter__btn"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Subscribe
                </button>
              </div>
              <p>
                Subscribe to our newsletter and unlock a world of exclusive
                content, curated just for you. Stay up-to-date with the latest
                trends, insightful articles, exciting promotions, and insider
                updates delivered straight to your inbox
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsLetter;
