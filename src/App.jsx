import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [activeLink, setActiveLink] = useState('home');

  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="app-container">
      <Navbar bg="dark" data-bs-theme="dark" sticky="top" variant="dark" className="navbar-custom">
        <Container>
          <Navbar.Brand href="#home">Papank</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={activeLink === 'home' ? 'active' : ''}
              onClick={() => handleNavClick('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={activeLink === 'about' ? 'active' : ''}
              onClick={() => handleNavClick('about')}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#education"
              className={activeLink === 'education' ? 'active' : ''}
              onClick={() => handleNavClick('education')}
            >
              Education
            </Nav.Link>
            <Nav.Link
              href="#hobbies"
              className={activeLink === 'hobbies' ? 'active' : ''}
              onClick={() => handleNavClick('hobbies')}
            >
              Hobbies
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={activeLink === 'contact' ? 'active' : ''}
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-5 content-container">
        {activeLink === 'home' && (
          <div className="section-content">
            <h2>Welcome to My Personal Space!</h2>
            <p>
              Hello! I'm thrilled to have you here. Explore my personal journey, experiences, and interests as I share my story
              with you. This website is a reflection of my passion for technology, learning, music, and creativity.
            </p>
            <p>
            </p>
          </div>
        )}

        {activeLink === 'about' && (
          <div className="section-content">
            <h2>About Me</h2>
            <p>
              Hi! I'm Adolf Rey E. Asagra. I'm passionate about technology, nature, and I aspire to explore the world someday.
              My ultimate goal is to achieve financial stability, establish a successful livestock farming business, and explore
              other opportunities that allow personal growth and contribution to my family and community.
            </p>
            <div>
              <h3>Skills</h3>
              <ul>
                <li>Knowledge in audio and visual presentation equipment and troubleshooting</li>
                <li>Can do the Kobe Dream Shake and Fadeaway moves 🏀</li>
                <li>I can cook a lot of dishes 🍳</li>
                <li>Good at spelling bee 🏆</li>
                <li>Can make other people smile 😊</li>
                <li>Good listener 👂</li>
              </ul>
            </div>
          </div>
        )}

        {activeLink === 'education' && (
          <div className="section-content">
            <h2>Education</h2>
            <ul>
              <li>I completed my elementary education at Quipayo Elementary School (2010 - 2017)</li>
              <li>I earned my Junior High School diploma from Quipayo National High School (2019 - 2021)</li>
              <li>I graduated from Senior High School at Naga College Foundation, Inc. (2021 - 2023)</li>
              <li>Currently, I am a second-year student pursuing a degree in Information Systems at Naga College Foundation, Inc. (NCF)</li>
            </ul>
          </div>
        )}

        {activeLink === 'hobbies' && (
          <div className="section-content">
            <h2>Hobbies</h2>
            <ul>
              <li>Fishing 🎣</li>
              <li>Watching Movies 🎥</li>
              <li>Listening to Music 🎶</li>
              <li>Playing Basketball 🏀</li>
            </ul>
          </div>
        )}

        {activeLink === 'contact' && (
          <div>
            <h2>Contact Me</h2>
            <p>
              If you'd like to connect, reach out to me through the following:
            </p>
            <ul>
              <li>Email: <a href="mailto:adolfreyasagra@gmail.com">adolfreyasagra@gmail.com</a></li>
              <li>Phone: <a href="tel:+639311131774">+639311131774</a></li>
            </ul>
            <p>
          
            </p>
          </div>
        )}
      </Container>
    </div>
  );
}

export default App;