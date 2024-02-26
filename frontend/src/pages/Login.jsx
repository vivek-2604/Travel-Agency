import React, { useContext, useState } from "react";
import "../styles/login.css";

// import Cookies from 'js-cookie';
import { Row, Container, Col, FormGroup, Form, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../assets/images/login.png";
import userImg from "../assets/images/user.png";

import { AuthContext } from "./../context/AuthContext";

const Login = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL
  const [creadentials, setCreadentials] = useState({
    email: undefined,
    password: undefined,
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCreadentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });

    try {
      const res = await fetch(`${baseUrl}/auth/login`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        creadentials: "include",
        body: JSON.stringify(creadentials),
      });
     
      const result = await res.json();

      if (!res.ok) {
        alert(result.message);
      } else {
        dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
        navigate("/");
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.message });
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userImg} alt="" />
                </div>

                <h2>Login</h2>

                <Form onSubmit={handleClick}>
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
                    onSubmit={handleClick}
                    type="submit"
                    className="btn secondary__btn auth__btn"
                  >
                    Login
                  </Button>
                </Form>
                <p>
                  Don't have account?{" "}
                  <Link to="/register">
                    <br />
                    Create Account
                  </Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
