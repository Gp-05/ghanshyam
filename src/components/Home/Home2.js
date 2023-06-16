import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/ghanshyam.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillInstagram,
  AiFillFacebook
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> core java, adv java,
                  spring MVC, Spring Boot REST API, Spring
                  Boot Micro services, HTML CSS , AWS.</b>
              </i>
              <br />
              <br />
              Skilled in creating high-quality design from REST API
              <i>
                <b className="purple">
                  {" "}
                  REST API.
                </b>
              </i>
              <br />
              <br />
              Excellent team player with experience working
              with
              <i>
                <b className="purple">
                  {" "}
                  Git, GitHub, and Jira.
                </b>
              </i>
              <br />
              <br />
              Achieved 80% + test coverage and thorough
              testing to ensure high-quality code.
              <i>
                <b className="purple">
                  {" "}
                  high-quality code.
                </b>
              </i>
              <br />
              <br />
              Continuously staying up-to-date with the latest
              development trends and technologies to deliver
              cutting-edge solutions.
              <i>
                <b className="purple">
                  {" "}
                  cutting-edge solutions.
                </b>
              </i>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" id="myimg1" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">

              <li className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100009181128606"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ghanshyam-panchal-6b4272274"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/panchal_5311/?igshid=MjEwN2IyYWYwYw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
