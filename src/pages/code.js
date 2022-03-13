import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import { StyledProjectCard, StyledPill } from "../components/styles"
import CodeIntro from "../components/codeIntro"

export default function CodePage({ data }) {
  const { projects } = data.portfolio
  return (
    <Layout>
      <CodeIntro />
      {projects.map(project => (
        <StyledProjectCard>
          <h2>{project.frontmatter.title}</h2>
          {project.frontmatter.tags.split(", ").map(tag => (
            <StyledPill>{tag}</StyledPill>
          ))}
          <br />
          <a href={project.frontmatter.link}>Source Code</a>
          <article>
            <MDXRenderer>{project.body}</MDXRenderer>
          </article>
          <p>{project.frontmatter.description}</p>
        </StyledProjectCard>
      ))}
    </Layout>
  )
}

export const query = graphql`
  {
    portfolio: allMdx(filter: { frontmatter: { type: { eq: "project" } } }) {
      projects: nodes {
        body
        frontmatter {
          title
          link
          tags
        }
      }
    }
  }
`
