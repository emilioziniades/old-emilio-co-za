import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

import { StyledHeader, StyledLogo } from "./styles"

const Header = () => {
  return (
    <StyledHeader>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Emilio Ziniades</title>
        <link rel="canonical" href="https://emilio.co.za/" />
      </Helmet>
      <Navbar expand="lg">
        <Navbar.Brand>
          <StyledLogo to="/">ez.</StyledLogo>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="align-items-end">
            <Nav.Item className="menu-item">
              <Link
                to="/teach"
                aria-label="teach-page"
                activeClassName="active-teach"
                partiallyActive
              >
                Teach
              </Link>
            </Nav.Item>
            <Nav.Item className="menu-item">
              <Link
                to="/write"
                aria-label="write-page"
                activeClassName="active-write"
                partiallyActive
              >
                Write
              </Link>
            </Nav.Item>
            <Nav.Item className="menu-item">
              <Link
                to="/code"
                aria-label="code-page"
                activeClassName="active-code"
                partiallyActive
              >
                Code
              </Link>
            </Nav.Item>
            <Nav.Item className="menu-item">
              <Link
                to="/about"
                aria-label="about-page"
                className="secondary-item"
                activeClassName="active-about"
                partiallyActive
              >
                about
              </Link>
            </Nav.Item>
            <Nav.Item className="menu-item">
              <Link
                to="/contact"
                aria-label="contact-page"
                className="secondary-item"
                activeClassName="active-contact"
                partiallyActive
              >
                contact
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </StyledHeader>
  )
}

export default Header
