import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ghanshyam Panchal </span>
            from <span className="purple"> Ahmedabad, India.</span>
            <br />Experienced Full Stack Java with over 2 year + of
            experience proficient in core java, adv java,
            spring MVC, Spring Boot REST API, Spring
            Boot Micro services, HTML CSS , AWS
            Skilled in creating high-quality design from
            REST API
            Excellent team player with experience working
            with Git, GitHub, and Jira.
            Achieved 80% + test coverage and thorough
            testing to ensure high-quality code.
            Continuously staying up-to-date with the latest
            development trends and technologies to deliver
            cutting-edge solutions.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Organised
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Success has no limites !"{" "}
          </p>
          <footer className="blockquote-footer">Ghanshyam Panchal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
