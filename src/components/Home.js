import React from 'react';
import { Row, Col, Image } from 'react-bootstrap'
import img from '../assets/avatar.png'

const Home = () => {

    return (
        <Row className='m-5'>
            <Col className='col1'>
                <Image src={img} width='200px'/>
            </Col>
            <Col className='col2'>
                <div className='con'>
                    <p className='title'>Hi there!</p>
                    <p className='title'>I am John Doe</p>
                </div>
            </Col>
        </Row>
    )
}

export default Home