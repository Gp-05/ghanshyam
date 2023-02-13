import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import exam from "../../Assets/Projects/exam.png";
import java from "../../Assets/Projects/java.png";
import hunt from "../../Assets/Projects/hunt.png";
import gruhudhyog from "../../Assets/Projects/gruhudhyog.png";
import micro from "../../Assets/Projects/micro.png";
import artishub from "../../Assets/Projects/artishub.png";
import watu from "../../Assets/Projects/watu.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={watu}
              isBlog={false}
              title="Watu-App"
              description="Watu app is Telecommunication Domain and my rule create Sprint boot REST API"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hunt}
              isBlog={false}
              title="Hunt-App"
              description="hunt app is online job finding apps and Create the REST API in Spring Boot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gruhudhyog}
              isBlog={false}
              title="GruhUdhyog"
              description="A Gruh Udyog enterprise is a project, firm, or business that is produced on a limited budget or for a small number of people, such as craftsmen, artisans, and technologists, who are skilled to work from their homes or from any place and utilized small machines, hired labor, and other business requirements."

            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exam}
              isBlog={false}
              title="Exam-Portal"
              description="The purpose of this Online Examination System project is to provide a web application which will considerably reduce the time required to give the exam and know the results. This project will provide an efficient platform both for the students and the teachers, by enabling examinations to be taken online."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={micro}
              isBlog={false}
              title="Microservices"
              description="Microservices are an architectural style that develops a single application as a set of small services. Each service runs in its own process. The services communicate with clients, and often each other, using lightweight protocols, often over messaging or HTTP."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={java}
              isBlog={false}
              title="Java"
              description="Additional project support and also new learning in full stack java topic"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
