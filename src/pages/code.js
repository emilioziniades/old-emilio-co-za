import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import { StyledCard } from "../components/styles"
import Badge from "react-bootstrap/Badge"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"

function pillColour(tagName) {
  const languages = ["Python", "Javascript", "Bash", "Solidity"]
  const frameworks = [
    "React",
    "Gatsby",
    "Truffle",
    "Numpy",
    "Plotly",
    "Networkx",
    "Matplotlib",
    "Pandas",
    "Web3py",
    "Ethers",
  ]

  return languages.includes(tagName)
    ? "language"
    : frameworks.includes(tagName)
    ? "framework"
    : "topic"
}

export default function CodePage({ data }) {
  const { projects } = data.portfolio
  return (
    <Layout pageTitle="💻 Code">
      <h3 className="text-center">
        {" "}
        More on <a href="https://github.com/emilioziniades"> Github </a>
      </h3>
      <Row className="justify-content-center">
        {projects.map(project => (
          <StyledCard className="m-3 p-3">
            <StyledCard.Title as="h2">
              {project.frontmatter.title}
            </StyledCard.Title>
            <StyledCard.Subtitle>
              {project.frontmatter.tags.split(", ").map(tag => (
                <Badge pill className={`m-1 pill ${pillColour(tag)}`}>
                  {tag}
                </Badge>
              ))}
            </StyledCard.Subtitle>
            <StyledCard.Body>
              <StyledCard.Text>
                <MDXRenderer>{project.body}</MDXRenderer>
              </StyledCard.Text>
              <Button
                variant="primary"
                size="sm"
                href={project.frontmatter.link}
                // className="source-link"
              >
                Source Code
              </Button>
            </StyledCard.Body>
          </StyledCard>
        ))}
      </Row>
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
