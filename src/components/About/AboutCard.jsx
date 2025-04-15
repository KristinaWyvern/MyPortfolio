import React, { useContext  } from "react";
import Card from "react-bootstrap/Card";
import CounterContext from '../../context/CounterContext';

function AboutCard() {
  const {lang} = useContext(CounterContext);
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", fontSize:"24px" }}>            
          {lang == 'ru' && ('Я разработчик, живущая в ') 
              || lang == 'en' &&('I am a developer living in ')}
            <span className="purple">{lang == 'ru' && ('Беларуси.') 
              || lang == 'en' &&('Belarus.')}</span>
            <br />
            {lang == 'ru' && ('Люблю пробовать новое и создавать интересные проекты.  Я независимый фрилансер.') 
              || lang == 'en' &&(' I like to try new things and create interesting projects. I am an independent freelancer. ')}
            <br />{lang == 'ru' && ('Я верю, что все является искусством, когда вы вкладываете в это свое сознание. ') 
              || lang == 'en' &&('I believe that everything is art when you put your mind into it. ')}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
