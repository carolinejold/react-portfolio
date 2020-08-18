import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';


const NavBar = () => {
    return (
        // <Navbar collapseOnSelect sticky="top" expand="lg">
        //     <BrowserRouter>
        //         <Navbar.Brand><Link smooth to="/" className="navbar-name">Caroline Old</Link></Navbar.Brand>
        //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //         <Navbar.Collapse id="responsive-navbar-nav">
        //             <Nav className="mr-auto">
        //                 <Nav.Link><Link smooth to="/#about">About</Link></Nav.Link>
        //                 <Nav.Link><Link smooth to="/#projects">Projects</Link></Nav.Link>
        //                 <Nav.Link><Link smooth to="/#contact">Contact</Link></Nav.Link>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </BrowserRouter>
        // </Navbar>


        <Navbar bg="light"  expand="lg" sticky="top">
            <Navbar.Brand href="#" className="navbar-name">Caroline Old</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="mr-auto">
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
    </Navbar>
    )
}

export default NavBar;