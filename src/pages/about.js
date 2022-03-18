import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Row from "react-bootstrap/Row"

import Layout from "../components/layout"
import { StyledArticle } from "../components/styles"
import AboutHero from "../components/aboutHero"

export default function IndexPage({ data }) {
  const aboutPage = data.allMdx.nodes[0]
  return (
    <Layout pageTitle="🔍 About">
      <StyledArticle>
        <AboutHero blurb={aboutPage.frontmatter.blurb} />
        <Row>
          <MDXRenderer>{aboutPage.body}</MDXRenderer>
        </Row>
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
        frontmatter {
          blurb
        }
      }
    }
  }
`
