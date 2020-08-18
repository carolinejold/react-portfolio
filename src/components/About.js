import React from 'react'
import { Fade } from 'react-reveal';
import Face from '../0.jpeg';


const About = () => {
    return (
        <div className="about-container" id="about">
            <Fade>
                <h3>About</h3>
            </Fade>
            <Fade bottom>
                <div className="about-container2">
                    <img className="face" src={Face} alt="my face" />
                    <h4>Caroline Old</h4>
                    <p>26. Scottish. Stockholm</p>
                    <p>Graduated with Law LLB (Hons) degree, background in digital marketing.</p>
                    <p>Passionate about Front-End Development.</p>
                    <p>Full-Stack Javascript Developer with <i>'fantastic enthusiasm and a natural eye for all things digital'</i>.</p>
                    <p>JavaScript | React | HTML5 | CSS3 | REST | HTTP/JSON/AJAX | Git | jQuery | Gatsby | Netlify | Express | Node.js | MongoDB | Redux | Styled Components | VSCode | Mocha/Jest | TDD | Mob Programming | Agile, Scrum & Remote Work Methods | Native English Speaker</p>
                    <p>Recently graduated from School of Applied Technology's highly intensive software development bootcamp.</p>
                    <p><i>'Caroline learns very quickly, has independent problem solving abilities, demonstrates natural curiosity, and has high quality standards for herself as well as others'</i></p>
                    <p><i>'Caroline has impressed the rest of the team with the rapid pace in which she makes a new concept or framework seem like her native tongue'</i></p>
                </div>
            </Fade>
        </div>
    )
}

export default About;
