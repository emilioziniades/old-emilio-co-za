import React from "react"

import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"

export default function Teach({ data }) {
  const teachPage = data.allMdx.nodes[0].body
  return (
    <Layout>
      <MDXRenderer>{teachPage}</MDXRenderer>
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
