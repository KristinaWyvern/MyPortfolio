import React from "react";
import { Col, Row } from "react-bootstrap";
import { VscVscodeInsiders } from "react-icons/vsc";
import { DiWindows } from "react-icons/di";
import { SiGithub,SiFigma,SiVercel,SiNetlify } from "react-icons/si";

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
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
      
    </Row>
  );
}

export default Toolstack;
