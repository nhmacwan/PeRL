import React, { Component } from 'react';
//import { Button } from 'react-bootstrap'

import Connection from './Connection';
import Teleoperation from './Teleoperation';
import { Row, Col, Container, Button} from 'react-bootstrap';

class Home extends Component{
    // state = {
    //     counter: 0,
    // };

    // increment_counter(){
    //     //this.state.counter = this.state.counter + 1;
    //     this.setState({counter:this.state.counter + 1});
    //     console.log(this.state.counter);
    // }
    state = {};
    render(){
        return (
                <Container>
                 <h1 className='text-center mt-3'>PeRL Sense</h1>
                 <Row>
                    <Col>
                        <Connection />
                    </Col>
                 </Row>
                 
                 <Row>
                    <Col>
                        <Teleoperation/>
                    </Col>

                    <Col>
                       <h3>Map</h3>
                       <p> This space is reserved for displaying map.</p>
                    </Col>
                    <Col>
                        <Teleoperation/>
                    </Col>
                 </Row>  
                 </Container>
        );
    }
}

export default Home;