import React, { useContext  } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import CounterContext from '../../context/CounterContext';
import barMenu from '../../assets/Project/barMenu.png';

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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={barMenu}
              isBlog={false}
              title="BarMenu"
              description={lang == 'ru' && ('Простой сайт с меню бара для выбора и оформления заказа, созданный на основе HTML5, CSS3, JS.') 
                || lang == 'en' &&(`A simple website with a bar menu for selection and checkout based on HTML5, CSS3, JS.`)}   
              ghLink="https://github.com/KristinaWyvern/BarMenu"
              demoLink="https://pi-bar-menu.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
