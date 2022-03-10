import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import styled from "styled-components"

// const StyledHeader = styled.header`
//   width: 100%;
//   max-width: 62.5rem;
//   height: 6.25rem;
//   margin: 0 auto;
//   padding: 0 2.5rem;
//   background: inherit;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `

const StyledHeader = styled.header``

// const StyledLogo = styled.div`
//   font-size: 2rem;
//   font-weight: 900;
//   color: black;
// `
//

const StyledNav = styled.nav``

const StyledLogo = styled.div``

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
            <Link to="/teach" aria-label="teach-page">
              Teach
            </Link>
          </li>
          <li>
            <Link to="/write" aria-label="write-page">
              Write
            </Link>
          </li>
          <li>
            <Link to="/code" aria-label="code-page">
              Code
            </Link>
          </li>
          <li>
            <Link to="/contact" aria-label="contact-page">
              Contact
            </Link>
          </li>
        </ul>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header
