import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function About () {
  return (
    <div className="about-page">
<br/>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


<br/>
   
        <h2>About Me</h2>
        <p>Hi! I'm Adolf Rey E. Asagra. I'm passionate about technology, nature, and helping people solve problems.</p>

    </div>
  );
};

export default About;