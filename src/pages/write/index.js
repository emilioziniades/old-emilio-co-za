import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/layout"

const WritePage = ({ data }) => {
  const { posts } = data.blog
  return (
    <Layout>
      {posts.map(post => (
        <article key={post.id}>
          <h2>
            <Link to={`/write/${post.slug}`}>{post.frontmatter.title}</Link>
          </h2>
          <small>{post.frontmatter.date}</small>
          <p> {post.frontmatter.description} </p>
        </article>
      ))}
    </Layout>
  )
}

export default WritePage

export const pageQuery = graphql`
  {
    blog: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { eq: "blog" } } }
    ) {
      posts: nodes {
        id
        slug
        frontmatter {
          date(fromNow: true)
          description
          page
          title
          type
        }
      }
    }
  }
`
