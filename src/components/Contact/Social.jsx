import React,{useContext} from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import CounterContext from '../../context/CounterContext';

const Social = () => {    
    const {lang} = useContext(CounterContext);

  return (
    <Container style={{padding: '30px'}}>
    <Row>
              <Col md={12} className="contact-social">
                <div className='contact-text'>
                <h1>
                  {lang == 'ru' && ('НАЙДИТЕ МЕНЯ НА') 
                     || lang == 'en' &&('FIND ME ON')}
                </h1>
                <p>
                    {lang == 'ru' && ('Пожалуйста, не стесняйтесь связаться со мной и') 
                     || lang == 'en' &&(`Please don't hesitate to reach out to me and`)}
                    <span className="purple">
                        {lang == 'ru' && (' пообщаться.') 
                        || lang == 'en' &&(` connect.`)}
                    </span>
                </p>
                </div>
                <ul className="contact-social-links">
                  <li className="contact-icons">
                    <a
                      href="https://github.com/KristinaWyvern"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="https://www.linkedin.com/in/kristina-dermanskaia/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="mailto:wyvernkristina@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color contact-social-icons"
                    >
                      <AiFillMail />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
  )
}

export default Social