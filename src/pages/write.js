import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import HeroShort from "../components/heroShort"

const WritePage = ({ data }) => {
  const { posts } = data.blog
  return (
    <Layout>
      <HeroShort text="write" class="highlighted2" />
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.frontmatter.title}</h2>
          <small>{post.frontmatter.date}</small>
          <p> {post.excerpt} </p>
        </article>
      ))}
    </Layout>
  )
}

export default WritePage

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        frontmatter {
          date(fromNow: true)
          title
        }
        excerpt
        id
      }
    }
  }
`
