import React from 'react'
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className='backfooter'>
    <div className='container pt-5 px-4 mt-5 text-body-secondary '>
    <div className="row">
        <div className="col-lg-5 mb-3">
        <a className="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none" href="/" aria-label="Bootstrap">
            <span className="fs-5">Personal Information</span>
        </a>
        <ul className="list-unstyled small">
            <li className="mb-2">I am a Software Engineering sudent.</li>
            <li className="mb-2">A front-end developer specialized in React.js</li>
        </ul>
        </div>
        <div className="col-6 col-lg-4 offset-lg-1 mb-3">
        <h5>Education</h5>
        <ul className="list-unstyled">
            <li className="mb-2"><a href="/">Software Engineering</a></li>
            <li className="mb-2"><a href="/">Al Baath University</a></li>
        </ul>
        </div>
        <div className="col-6 col-lg-2 mb-3">
        <h5>Conatct info</h5>
        <ul className="list-unstyled">
            <li className="mb-2"><a href="/"><SiGmail/> Gmail</a></li>
            <li className="mb-2"><a href="/"><FaLinkedin/> LinkedIn</a></li>
            <li className="mb-2"><a href="/"><FaGithub/> Github</a></li>
        </ul>
        </div>
    </div>
    </div>
    </div>
  )
}

export default About