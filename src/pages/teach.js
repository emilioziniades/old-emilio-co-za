import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import { StyledArticle } from "../components/styles"

export default function Teach({ data }) {
  const teachPage = data.allMdx.nodes[0].body
  return (
    <Layout pageTitle="📚 Teach">
      <StyledArticle>
        <MDXRenderer>{teachPage}</MDXRenderer>
        <p>
          If you are interested, please{" "}
          <Link to="/contact">send me a message</Link>
        </p>
      </StyledArticle>
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(
      filter: { frontmatter: { type: { eq: "page" }, page: { eq: "teach" } } }
    ) {
      nodes {
        id
        body
      }
    }
  }
`
