import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledFooter = styled.footer`
  width: 100%;
  height: 5.25rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: +1px;
  font-weight: 700;
`

const Footer = () => (
  <StyledFooter>
    <Link to="/contact" aria-label="Contact">
      <span role="img" aria-label="emoji">
        📬
      </span>{" "}
      Get in touch
    </Link>
  </StyledFooter>
)

export default Footer
