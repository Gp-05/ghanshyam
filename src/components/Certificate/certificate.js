import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCard from "./certificateCards";
import Particle from "../Particle";
import img1 from "../../Assets/certicate/1.png";
import img2 from "../../Assets/certicate/2.png";
import img3 from "../../Assets/certicate/3.png";
import img4 from "../../Assets/certicate/4.png";
import img5 from "../../Assets/certicate/5.png";
import img6 from "../../Assets/certicate/6.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Career <strong className="purple">Certificate </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">

            <CertificateCard
              imgPath={img1}
              isBlog={false}
              title="Certificate of Achievement"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={img2}
              isBlog={false}
              title="NSDC Certificate"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={img3}
              isBlog={false}
              title="Training Completion Certificate"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={img4}
              isBlog={false}
              title="Java Programming Certification"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={img5}
              isBlog={false}
              title="Java Certification"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={img6}
              isBlog={false}
              title="Digital Marketing Certification"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
