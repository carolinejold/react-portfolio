import React from 'react'
import { Container } from 'react-bootstrap';
import { Fade } from 'react-reveal';


const Contact = () => {
    return (
        <div id="contact">
            <Fade>
                <h3>Contact</h3>
            </Fade>
            <Fade bottom>
                <Container>
                <p><a href="mailto:carolinejold@gmail.com?subject=Portfolio response">carolinejold@gmail.com</a></p>
                <p><a href="https://www.linkedin.com/in/carolinejold/">linkedin.com/in/carolinejold</a></p>
                </Container>
            </Fade>
        </div>
    )
}

export default Contact;
