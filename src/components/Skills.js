import React from 'react'
import html from '../assets/html.png'
import css from '../assets/CSS.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import boot from '../assets/Bootstrap.png'
import { Col, Row } from 'react-bootstrap'
import img from '../assets/coder.png'

const Skills = () => {
  return (
    <Row className='mx-0 mb-4'>
        <Col>
            <div className='mx-5 px-5 '>
            <p className='subtitle'>My skills:</p>
            <div className='my-4 d-flex justify-content-center'>
                <img src={html} alt='html' className='icon'/>         
                <span className='ser'>HTML</span>
            </div>
            <div className='my-4 d-flex justify-content-center'>
                <img src={css} alt='css' className='icon'/>        
                <span className='ser'>CSS</span>
            </div >
            <div className='my-4 d-flex justify-content-center'>
                <img src={js} alt='js' className='icon'/> 
                <span className='ser'>JavaScript</span>
            </div>
            <div className='my-4 d-flex justify-content-center'>
                <img src={react} alt='react' className='icon'/>
                <span className='ser'>React.js</span>
            </div>
            <div className='my-4 d-flex justify-content-center'>
                <img src={boot} alt='bootstrap' className='icon'/> 
                <span className='ser'>Bootstrap</span>
            </div> 
            </div>
        </Col>
        <Col>
            <img src={img} alt='coder' />
        </Col>

    </Row>
  )
}

export default Skills