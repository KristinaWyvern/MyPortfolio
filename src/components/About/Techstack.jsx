import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiReact,
  DiNodejs,  
  DiMsqlServer,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {SiPostgresql,SiSharp } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center"}}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>   
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>      
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>      
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMsqlServer />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
    </Row>
  );
}

export default Techstack;
