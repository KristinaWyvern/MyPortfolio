import React, { useContext  } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdfRu from "../../assets/КристинаДерманская.pdf";
import pdf from "../../assets/Kristina_Dermanskaya.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import Aboutcard from "./AboutCard";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import CounterContext from '../../context/CounterContext';

function About() {  
const {lang} = useContext(CounterContext);
let cv;
if(lang == 'ru'){
  cv ='Скачать';
}
else{
  cv = 'Download';
}

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
      <Row style={{ justifyContent: "left", padding: "10px" }}>
        <Aboutcard />
      </Row>
      <Row style={{ justifyContent: "center", position: "relative" }}>
      {lang == 'ru' && (
        <Col xs={4} md={2}>
          <Button
            href={pdfRu}
            target="_blank"
            variant="outline-dark"
            style={{ maxWidth: "250px", color: "#b860f2"}}
          >
            <AiOutlineDownload />
            &nbsp;Скачать CV(ru)
          </Button>
              </Col>
          ) 
              || lang == 'en' &&('')}
          <Col xs={4} md={2}>
          <Button
            href={pdf}
            target="_blank"
            variant="outline-dark"
            style={{ maxWidth: "250px", color: "#b860f2"}}
          >
            <AiOutlineDownload />
            &nbsp;{cv} CV(en)
          </Button>
          </Col>
        </Row>
      <h1 className="project-heading">        
        <strong className="purple">
           {lang == 'ru' && ('Скиллы') 
              || lang == 'en' &&('Skills')}
        </strong>
      </h1>
      <Techstack />
 
      <h1 className="project-heading">
        <strong className="purple">
        {lang == 'ru' && (' Инструменты') 
              || lang == 'en' &&('Tools')}
        </strong>
      </h1>      
      <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
