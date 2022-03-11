import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import styled from "styled-components"

const StyledHeader = styled.header`
  width: 100%;
  max-width: 62.5rem;
  height: 6.25rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  background: inherit;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const StyledLogo = styled.div`
  font-size: 2rem;
  font-weight: 900;
  color: black;
  margin: 1rem;
  padding: 1rem;
`

const StyledNav = styled.nav`
  a {
    text-decoration: underline;
    font-size: 1.5rem;
    padding: 0.25rem 0.75rem;
    font-weight: 700;
  }
  ul {
    list-style-type: none;
    display: float;
  }
  li {
    padding: 0.25rem 0.5rem;
  }
  .contact {
    margin: 0 2rem;
  }

  .contact-link {
    border: 0.15rem solid black;
    padding: 0.25rem 0.75rem;
    text-decoration: none;
  }
  .active-code {
    box-shadow: inset 0 -2.5rem 0 #adebce;
    text-decoration: none;
  }
  .active-teach {
    box-shadow: inset 0 -2.5rem 0 #e69eab;
    text-decoration: none;
  }
  .active-write {
    box-shadow: inset 0 -2.5rem 0 #becfee;
    text-decoration: none;
  }
  .active-contact {
    box-shadow: inset 0 -2.5rem 0 #ffdb70;
    border: none;
  }
`

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
            >
              Teach
            </Link>
          </li>
          <li>
            <Link
              to="/write"
              aria-label="write-page"
              activeClassName="active-write "
            >
              Write
            </Link>
          </li>
          <li>
            <Link
              to="/code"
              aria-label="code-page"
              activeClassName="active-code "
            >
              Code
            </Link>
          </li>
          <li className="contact">
            <Link
              className="contact-link"
              to="/contact"
              aria-label="contact-page"
              activeClassName="active-contact "
            >
              Contact
            </Link>
          </li>
        </ul>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header
