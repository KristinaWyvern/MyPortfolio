import React from "react";
import { Col, Row } from "react-bootstrap";
import { VscVscodeInsiders } from "react-icons/vsc";
import { DiWindows } from "react-icons/di";
import { SiGithub,SiFigma } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        < DiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < VscVscodeInsiders />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <  SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      
    </Row>
  );
}

export default Toolstack;
