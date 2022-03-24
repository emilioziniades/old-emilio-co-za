import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import { StyledArticle } from "../components/styles"

export default function IndexPage({ data }) {
  const aboutPage = data.allMdx.nodes[0]
  return (
    <Layout pageTitle="🔍 About">
      <StyledArticle noFlex>
        <StaticImage
          src="../images/heroPicture.png"
          alt="Picture of Emilio Ziniades"
          placeholder="blurred"
          quality={100}
          height="100px"
          style={{ float: "left" }}
          className="m-3"
        />
        <MDXRenderer>{aboutPage.body}</MDXRenderer>
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
