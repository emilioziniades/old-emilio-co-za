import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import { StyledArticle } from "../components/styles"

export default function IndexPage({ data }) {
  const aboutPage = data.allMdx.nodes[0].body
  return (
    <Layout pageTitle="🔍 About">
      <StyledArticle>
        <MDXRenderer>{aboutPage}</MDXRenderer>
      </StyledArticle>
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(
      filter: { frontmatter: { type: { eq: "page" }, page: { eq: "about" } } }
    ) {
      nodes {
        id
        body
      }
    }
  }
`
