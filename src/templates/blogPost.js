import React from "react"
import { graphql, Link } from "gatsby"
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
        <p>{data.mdx.frontmatter.date}</p>
        {hasHeadings && <TableOfContents headings={data.mdx.headings} />}
        <article>
          <MDXRenderer headings={data.mdx.headings}>
            {data.mdx.body}
          </MDXRenderer>
        </article>
        <Row className="m-2">
          {previous && (
            <Col sm="auto">
              <span role="img" aria-label="emoji">
                <h2>⬅️</h2>
              </span>
            </Col>
          )}
          <Col>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                {" " + previous.frontmatter.title}
              </Link>
            )}
          </Col>
          <Col style={{ textAlign: "right" }}>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title + " "}
              </Link>
            )}
          </Col>
          {next && (
            <Col sm="auto">
              <span role="img" aria-label="emoji">
                <h2>➡️</h2>
              </span>
            </Col>
          )}
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
        date(formatString: "D MMMM YYYY")
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
