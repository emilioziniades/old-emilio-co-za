import React from "react"

import Layout from "../components/layout"
import HeroShort from "../components/heroShort"

export default function ({ data }) {
  const teachPage = data.allFile.nodes[0].childMarkdownRemark.html
  return (
    <Layout>
      <HeroShort text="teach" class="highlighted1" />
      <section dangerouslySetInnerHTML={{ __html: teachPage }} />
    </Layout>
  )
}

export const query = graphql`
  {
    allFile(
      filter: { sourceInstanceName: { eq: "pages" }, name: { eq: "teach" } }
    ) {
      nodes {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
