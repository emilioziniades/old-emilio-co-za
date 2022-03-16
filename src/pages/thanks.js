import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { StyledArticle } from "../components/styles"
export default function Thanks() {
  return (
    <Layout pageTitle="💫 Thank you">
      <StyledArticle center>
        <h2>I will be in touch shortly. </h2>
        <Link to="/" aria-label="home">
          go back
        </Link>
      </StyledArticle>
    </Layout>
  )
}
