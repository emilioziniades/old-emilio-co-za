import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import { StyledHeader, StyledLogo, StyledNav } from "./styles"

const Header = () => {
  return (
    <StyledHeader>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Emilio Ziniades</title>
        <link rel="canonical" href="https://emilio.co.za/" />
      </Helmet>
      <Link to="/" aria-label="home">
        <StyledLogo>ez.</StyledLogo>
      </Link>
      <StyledNav>
        <ul>
          <li>
            <Link
              to="/teach"
              aria-label="teach-page"
              activeClassName="active-teach "
              partiallyActive
            >
              Teach
            </Link>
          </li>
          <li>
            <Link
              to="/write"
              aria-label="write-page"
              activeClassName="active-write "
              partiallyActive
            >
              Write
            </Link>
          </li>
          <li>
            <Link
              to="/code"
              aria-label="code-page"
              activeClassName="active-code "
              partiallyActive
            >
              Code
            </Link>
          </li>
          {/* <li className="contact">
              <Link
                className="contact-link"
                to="/contact"
                aria-label="contact-page"
                activeClassName="active-contact "
              >
                Contact
              </Link>
            </li>
          */}
        </ul>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header
