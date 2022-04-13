import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Layout from "../components/layout"
import { StyledArticle } from "../components/styles"

export default function WritePage({ data }) {
  const { posts } = data.blog
  return (
    <Layout pageTitle="📝 Write">
      {posts.map(post => (
        <StyledArticle key={post.id}>
          <Row>
            <Col sm="auto">
              <GatsbyImage
                image={getImage(post.frontmatter.hero_image)}
                alt={post.frontmatter.hero_image_alt}
                className="m-2 mx-auto"
              />
            </Col>
            <Col>
              <Card.Title as="h2">
                <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
              </Card.Title>
              <small>{post.frontmatter.date}</small>
              <p> {post.frontmatter.description} </p>
            </Col>
          </Row>
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
          hero_image {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                height: 125
                width: 125
                aspectRatio: 1
                backgroundColor: "white"
                placeholder: BLURRED
              )
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`
