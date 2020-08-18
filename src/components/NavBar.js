import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';


const NavBar = () => {
    return (
        <Navbar className="navbar" collapseOnSelect sticky="top" expand="lg">
            <BrowserRouter>
            <Navbar.Brand className="nav-name"><Link smooth to="/" className="navbar-name">Caroline Old</Link></Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="nav-link-container">
                        <Nav.Link className="nav-link"><Link smooth to="/#about" className="nav-link">About</Link></Nav.Link>
                        <Nav.Link className="nav-link"><Link smooth to="/#projects" className="nav-link">Projects</Link></Nav.Link>
                        <Nav.Link className="nav-link"><Link smooth to="/#contact" className="nav-link">Contact</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </BrowserRouter>
        </Navbar>
    )
}

export default NavBar;