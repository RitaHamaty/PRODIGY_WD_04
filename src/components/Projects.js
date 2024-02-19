import React from 'react'
import Project from './Project'
import { Row } from 'react-bootstrap'
import weather from '../assets/we.png'
import travel from '../assets/travel.jpg'
import events from '../assets/ev.png'
import camp from '../assets/images.jpg'

const Projects = () => {

    const projects = [{
        title: 'Weather App', 
        desc: 'Weather app providing weather based on user input.',
        techs: 'React - Bootstrap - axios',
        img: weather
    }, {
        title: 'Events Planning App', 
        desc: 'Planning social events.',
        techs: 'React - Bootstrap - axios - styled components - context api',
        img: events
    }, {
        title: 'Travel App', 
        desc: 'Travel web app for booking flight tickets.',
        techs: 'React - Bootstrap - axios',
        img: travel
    }, {
        title: 'Adventurer App', 
        desc: 'Camping and Hicking web app.',
        techs: 'React - Bootstrap - axios - styled components - context api',
        img: camp
    }]
    return (
        <div className='mb-4'>
            <p className='subtitle'>My projects:</p>
            <Row className='mx-0 d-flex justify-content-center align-items-center'>
                {projects.map(p => <Project title={p.title} desc={p.desc} techs={p.techs} img={p.img}/>)}
            </Row>
        </div>
    )
}

export default Projects