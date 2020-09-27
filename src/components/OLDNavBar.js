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

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./OLDAbout";
import Blog from "./Blog";
import Resources from "./Resources";
import Videos from "./Videos";

const HeaderNav = () => {
  return (
    <Router>
      <div>
        <div className="app-header">
          <header className="app-header-title">
            <Link to="/">
              <h1 className="nav-title">
                WomenCode<span className="pink-dot">.</span>se
              </h1>
            </Link>
          </header>
          <nav className="app-header-nav">
            <Link className="app-header-nav__links" to="#about">
              About
            </Link>
            <Link className="app-header-nav__links" to="/blog">
              Blog
            </Link>
            <Link className="app-header-nav__links" to="/resources">
              Resources
            </Link>
            <Link className="app-header-nav__links" to="/videos">
              Videos
            </Link>
          </nav>
        </div>
        <br />

        {/* A <Switch> looks through its children <Route>s and */}
        {/* renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/videos">
            <Videos />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default HeaderNav;