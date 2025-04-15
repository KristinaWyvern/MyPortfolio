import React, { useContext  } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";
import CounterContext from '../../context/CounterContext';

function Home() {
const {lang} = useContext(CounterContext);

  return (
    <section >
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
              {lang == 'ru' && ('Добро пожаловать на мой сайт!') 
              || lang == 'en' &&('Welcome to my site!')}{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                <svg className='hand' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'><rect width='256' height='256' fill='none' /><path d='M98,64.31a20,20,0,0,1,34.64-20l28,48.5' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='16' />
                  <path d='M71.35,98.17l-16-27.71A20,20,0,0,1,90,50.46l34,58.89' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='16' /><path d='M156,164.77a40,40,0,0,1,14.64-54.64l-10-17.32a20,20,0,0,1,34.64-20l18,31.18A80,80,0,0,1,74.7,184l-38-65.82a20,20,0,0,1,34.65-20l22,38.1' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='16' />
                  <path d='M192,32a52.12,52.12,0,0,1,32,24' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='16' /><path d='M74.62,232c-11-8.69-19.39-19.48-26.62-32' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='16' />
                </svg>
                </span>
              </h1>

              <h1 className="heading-name">
              {lang == 'ru' && ('Я') || lang == 'en' &&(`I'm`)}                
                <strong className="main-name"> 
                {lang == 'ru' && (' Дерманская Кристина')  || lang == 'en' &&(' Kristina Dermanskaya')}
                  </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>      
      <Particle />
    </section>
  );
}

export default Home;
