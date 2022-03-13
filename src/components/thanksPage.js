import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { StyledContainer } from "../components/styles"

const ThanksPage = () => {
  return (
    <Layout>
      <StyledContainer center>
        <h2>Thank you! I will be in touch shortly. </h2>
        <Link to="/" aria-label="home">
          go back
        </Link>
      </StyledContainer>
    </Layout>
  )
}

export default ThanksPage
