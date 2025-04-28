import React, { useContext  } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import CounterContext from '../../context/CounterContext';
import barMenu from '../../assets/Project/barMenu.png';
import flapyBird from '../../assets/Project/flappyBird.png';
import Quiz from '../../assets/Project/Quiz.png';

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
              imgPath={Quiz}
              isBlog={false}
              title="Personality Quiz"
              description={lang == 'ru' && ('Онлайн-викторина, построенная на react.js.') 
                || lang == 'en' &&(`An online personality quiz built on react.js.`)}   
              ghLink="https://github.com/KristinaWyvern/Personality-Quiz"
              demoLink="https://personality-quiz-eight.vercel.app"
            />
          </Col>
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flapyBird}
              isBlog={false}
              title="FlappyBirdGame"
              description={lang == 'ru' && ('Симулятор Flappy Bird на основе JS.') 
                || lang == 'en' &&(`Flappy Bird simulator based on JS.`)}   
              ghLink="https://github.com/KristinaWyvern/FlappyBirdGame"
              demoLink="https://flappy-bird-game-clone.netlify.app"
            />
          </Col> 
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
