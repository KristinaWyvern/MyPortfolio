import Particle from '../Particle';
import React,{useState, useRef,  useContext} from 'react'
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Social from './Social';
import CounterContext from '../../context/CounterContext';


function Contact() {   
  const {lang} = useContext(CounterContext);
    const form = useRef();
    const [done, setDone] = useState(false)
    const [notDone, setNotDone] = useState(false)
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
        setDone(false)
        setNotDone(false)
    }

    const sendEmail = (e) => {
    e.preventDefault();
    
    if(!formData.from_name || !formData.reply_to ||!formData.message){
      setNotDone(true)
    } else {
      
    emailjs
      .sendForm(
        'service_4fc6o3j', 
        'template_o84ng6h', 
        form.current, 
        'nbN9bZb_vdtRu8MQt'
      )

      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
    };
  return (
    <Container style={{padding: '60px'}}>
      <Particle />
      <Container style={{paddingTop: '50px'}} >
            <Row >
            <Col md={6} className="c-left" >
            <h1 >
              {lang == 'ru' && ('Свяжитесь') 
                || lang == 'en' &&('Get in Touch')}
            </h1>
            <h1 className="purple">
              {lang == 'ru' && ('со мной') 
                || lang == 'en' &&('Contact me')}
            </h1>
            </Col>
            <Col md={6} className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="from_name" className="user"  placeholder="Name" onChange={handleChange}/>
                <input type="email" name="reply_to" className="user" placeholder="Email" onChange={handleChange} />
                <textarea name="message" className="user" placeholder="Message" onChange={handleChange} />
                <span className='not-done' >
                  {notDone && lang == 'ru' && ('Пожалуйста, заполните все поля ввода') 
                  ||notDone && lang == 'en' &&('Please, fill all the input field')}</span>
                <Button type="submit" disabled={done} className={`button1`}>
                  {lang == 'ru' && ('Отправить') 
                || lang == 'en' &&('Send')}</Button>
                <span className='done'>
                  {done && lang == 'ru' && ('Спасибо, что связались со мной.') 
                  ||done && lang == 'en' &&('Thanks for contacting me.')}
                </span>
                </form>
            </Col>
            </Row>
        </Container>
        
      <Social />
    </Container>
  )
}

export default Contact