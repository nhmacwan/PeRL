import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class Footer extends Component{
    state = {};
    render(){
        return(
            <Container className='text-center'>
            <div>
                <p>
                    <i> <b>
                    People and Robot Laboratory &copy; 2023
                    </b> </i> 
                </p>
            </div>
            </Container>
        );
    }
}

export default Footer;