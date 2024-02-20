import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { Link, Element } from 'react-scroll';
import About from './components/About';

function App() {
  
  return (
    <div>
      <Nav justify variant="underline">
        <Nav.Item className='item'>
          <Link to="home" spy={true} smooth={true} duration={700}>Home</Link>
        </Nav.Item>
        <Nav.Item className='item'>
          <Link to="skills" smooth={true} duration={700}>Skills</Link>
        </Nav.Item>
        <Nav.Item className='item'>
          <Link to="projects" spy={true} smooth={true} duration={700}>Projects</Link>
        </Nav.Item>
        <Nav.Item className='item'>
          <Link to="about" spy={true} smooth={true} duration={700}>About me</Link>
        </Nav.Item>
      </Nav>

      <Element name="home">
        <Home />
      </Element>
      <Element name="skills">
        <Skills/>
      </Element>
      <Element name="projects">
        <Projects/>
      </Element>
      <Element name="about">
        <About />
      </Element>
    </div>
  );
}

export default App;
