import "./newsLetter.css";
import { Col, Row, Container } from "reactstrap";

import maleTourist from "../assets/images/male-tourist.png";

const NewsLetter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe now to get useful travelling information</h2>

              <div className="newsletter__input">
                <input type="email" placeholder="Entye your email" />
                <button className="btn newsletter__btn">Subscribe</button>
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
