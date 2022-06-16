import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Layout from "../components/layout"
import { StyledArticle } from "../components/styles"
import TableOfContents from "../components/tableOfContents"

const BlogPost = ({ data }) => {
  const { previous, next } = data
  const hasHeadings = data.mdx.headings.length !== 0
  return (
    <Layout>
      <StyledArticle>
        <h1>{data.mdx.frontmatter.title}</h1>
        <b>{data.mdx.frontmatter.date}</b>
        <i className="my-3">{data.mdx.frontmatter.description}</i>
        {hasHeadings && (
          <TableOfContents className="my-3 mx-1" headings={data.mdx.headings} />
        )}
        <article className="mt-2">
          <MDXRenderer headings={data.mdx.headings}>
            {data.mdx.body}
          </MDXRenderer>
        </article>
        <Row className="m-2">
          <Col sm="auto">
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                <span role="img" aria-label="emoji">
                  <h2>⬅️</h2>
                </span>
              </Link>
            )}
          </Col>
          <Col>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                <h5>{" " + previous.frontmatter.title}</h5>
              </Link>
            )}
          </Col>
          <Col style={{ textAlign: "right" }}>
            {next && (
              <Link to={next.fields.slug} rel="next">
                <h5>{next.frontmatter.title + " "}</h5>
              </Link>
            )}
          </Col>
          <Col sm="auto" style={{ textAlign: "right" }}>
            {next && (
              <Link to={next.fields.slug} rel="next">
                <span role="img" aria-label="emoji">
                  <h2>➡️</h2>
                </span>
              </Link>
            )}
          </Col>
        </Row>
      </StyledArticle>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query ($id: String, $previousPostId: String, $nextPostId: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
        date(formatString: "D MMMM YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              transformOptions: { fit: CONTAIN }
              height: 350
              width: 700
              backgroundColor: "white"
              placeholder: BLURRED
            )
          }
        }
      }
      body
      headings {
        depth
        value
      }
    }

    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
