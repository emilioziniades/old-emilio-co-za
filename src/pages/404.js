import React from "react"

import Layout from "../components/layout"
import { StyledContainer } from "../components/styles"

const NotFound = () => {
  return (
    <Layout>
      <StyledContainer center>
        <h2>404</h2>
        <h1>
          <span role="img" aria-label="emoji">
            🙆🏻‍♂️
          </span>
          ... the page you are looking for does not exist
        </h1>
      </StyledContainer>
    </Layout>
  )
}

export default NotFound
