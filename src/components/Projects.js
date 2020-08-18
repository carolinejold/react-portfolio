import React from 'react';
import axios from 'axios';
import { Container, Card } from 'react-bootstrap';
import { Fade } from 'react-reveal';


// TODO change to hooks
class Projects extends React.Component {
    state = {
        projects: []
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/carolinejold/repos?sort=updated`)
            .then(res => {
                const projects = res.data;
                this.setState({ projects });
            })
    }

    render() {
        return (
            <div id="projects">
                <Fade>
                    <h3>Projects</h3>
                    <h5>via <a href="https://github.com/carolinejold/" target="_blank" rel="noopener noreferrer">Github</a></h5>
                </Fade>
                <Fade bottom>
                    <Container className="project-card-container">
                        {this.state.projects.map(project =>
                            <Card className="project-card" id={project.id} key={project.id} style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title><h4><a href={project.html_url} target="_blank" rel="noopener noreferrer">{project.name}</a></h4></Card.Title>
                                    <Card.Subtitle className="subtitle">Last updated: {project.updated_at}</Card.Subtitle>
                                    <Card.Text>{project.description}</Card.Text>
                                    <Card.Link className="github-link" href={project.html_url} target="_blank" rel="noopener noreferrer">View on Github</Card.Link>
                                </Card.Body>
                            </Card>
                        )}
                    </Container>
                </Fade>
                
            </div>
        )
    }
}

export default Projects;