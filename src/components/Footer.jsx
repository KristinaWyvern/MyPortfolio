import React,{ useContext }  from "react";
import { Container, Row, Col } from "react-bootstrap";
import { 
  AiFillGithub,
  AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import CounterContext from '../context/CounterContext';


function Footer() {
  let date = new Date();
  let year = date.getFullYear();  
  const { lang } = useContext(CounterContext);
  
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>
           {lang== 'ru' && ('Разработано Дерманской Кристиной') || lang== 'en' &&('Developed by Kristina Dermanskaya')}  
          </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>
          Copyright ©{year} KD  
          </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/KristinaWyvern"
                style={{ color: "#cdd6f4 " }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/kristina-dermanskaia/"
                style={{ color: "#cdd6f4 " }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>   
            <li className="social-icons">
              <a
                href="mailto:wyvernkristina@gmail.com"
                style={{ color: "#cdd6f4" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineMail />
              </a>
            </li>          
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
