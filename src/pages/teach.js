import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import { StyledContainer } from "../components/styles"

export default function Teach({ data }) {
  const teachPage = data.allMdx.nodes[0].body
  return (
    <Layout>
      <StyledContainer>
        <MDXRenderer>{teachPage}</MDXRenderer>
        <p>
          If you are interested, please{" "}
          <Link to="/contact">send me a message</Link>
        </p>
      </StyledContainer>
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(
      filter: { frontmatter: { type: { eq: "page" }, page: { in: "teach" } } }
    ) {
      nodes {
        id
        body
      }
    }
  }
`
