import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import { StyledArticle } from "../components/styles"

const BlogPost = ({ data }) => {
  const { previous, next } = data
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <StyledArticle>
        <p>{data.mdx.frontmatter.date}</p>
        <article>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
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
