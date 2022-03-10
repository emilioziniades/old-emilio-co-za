import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import ProjectCard from "../components/projectCard"

const CodePage = ({ data }) => {
  const { projects } = data.portfolio
  return (
    <Layout>
      {projects.map(project => (
        <ProjectCard
          title={project.frontmatter.title}
          description={project.frontmatter.description}
          link={project.frontmatter.link}
        />
      ))}
    </Layout>
  )
}

export const query = graphql`
  {
    portfolio: allMdx(filter: { frontmatter: { type: { eq: "project" } } }) {
      projects: nodes {
        frontmatter {
          title
          description
          link
        }
      }
    }
  }
`

export default CodePage
