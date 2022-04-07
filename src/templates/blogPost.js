import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import { StyledArticle } from "../components/styles"
import TableOfContents from "../components/tableOfContents"

const BlogPost = ({ data }) => {
  const { previous, next } = data
  const hasHeadings = data.mdx.headings.length !== 0
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <StyledArticle>
        <p>{data.mdx.frontmatter.date}</p>
        {hasHeadings && <TableOfContents headings={data.mdx.headings} />}
        <article>
          <MDXRenderer headings={data.mdx.headings}>
            {data.mdx.body}
          </MDXRenderer>
        </article>
        <nav>
          <ul>
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  <span role="img" aria-label="emoji">
                    ⬅️
                  </span>
                  {" " + previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title + " "}
                  <span role="img" aria-label="emoji">
                    ➡️
                  </span>
                </Link>
              )}
            </li>
          </ul>
        </nav>
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
        date(formatString: "MMMM D, YYYY")
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
