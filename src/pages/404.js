import React from "react"

import Layout from "../components/layout"
import { StyledArticle } from "../components/styles"

const NotFound = () => {
  return (
    <Layout>
      <StyledArticle center>
        <h2>404</h2>
        <h1>
          <span role="img" aria-label="emoji">
            🙆🏻‍♂️
          </span>
          ... the page you are looking for does not exist
        </h1>
      </StyledArticle>
    </Layout>
  )
}

export default NotFound
