import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import { StyledArticle } from "../components/styles"
import Card from "react-bootstrap/Card"

export default function WritePage({ data }) {
  const { posts } = data.blog
  return (
    <Layout pageTitle="📝 Write">
      {posts.map(post => (
        <StyledArticle key={post.id}>
          <Card.Title as="h2">
            <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
          </Card.Title>
          <small>{post.frontmatter.date}</small>
          <p> {post.frontmatter.description} </p>
        </StyledArticle>
      ))}
    </Layout>
  )
}

export const query = graphql`
  {
    blog: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { eq: "blog" } } }
    ) {
      posts: nodes {
        id
        frontmatter {
          date(fromNow: true)
          description
          page
          title
          type
        }
        fields {
          slug
        }
      }
    }
  }
`
