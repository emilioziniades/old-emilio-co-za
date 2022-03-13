import React from "react"
import { Link } from "gatsby"

import { StyledFooter } from "./styles"

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
