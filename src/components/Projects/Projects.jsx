import React, { useContext  } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import CounterContext from '../../context/CounterContext';

function Projects() {
  
const {lang} = useContext(CounterContext);
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        {lang == 'ru' && ('Мои последние ') 
              || lang == 'en' &&('My Recent ')}           
          <strong className="purple">{lang == 'ru' && ('Работы') 
              || lang == 'en' &&('Works')} </strong>
        </h1>
        <p style={{ color: "#cdd6f4" }}>
        {lang == 'ru' && ('Вот несколько проектов, над которыми я работал в последнее время.') 
              || lang == 'en' &&(`Here are a few projects I've worked on recently.`)}          
        </p>
      
      </Container>
    </Container>
  );
}

export default Projects;
