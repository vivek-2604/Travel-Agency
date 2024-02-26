import React, { useState, useContext } from "react";
import "../styles/login.css";

import { Row, Container, Col, FormGroup, Form, Button } from "reactstrap";
import { Link, Navigate, json, useNavigate } from "react-router-dom";

import registerImg from "../assets/images/register.png";
import userImg from "../assets/images/user.png";
import { AuthContext } from "./../context/AuthContext";

const Register = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL
  const [creadentials, setCreadentials] = useState({
    userName: undefined,
    email: undefined,
    password: undefined,
  });

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCreadentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${baseUrl}/auth/register`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(creadentials),
      });
      const result = await res.json();

      if (!res.ok) {
        alert(result.message);
      } else {
        dispatch({ type: "REGISTER_SUCCESS" });
        navigate("/login");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userImg} alt="" />
                </div>

                <h2>Register</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      id="username"
                      required
                      type="text"
                      placeholder="User Name"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      id="email"
                      required
                      type="email"
                      placeholder="Email"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      id="password"
                      required
                      type="password"
                      placeholder="password"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button
                    type="submit"
                    className="btn secondary__btn auth__btn"
                  >
                    Create Account
                  </Button>
                </Form>
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
