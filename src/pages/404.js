import React from "react"

import Layout from "../components/layout"

const notFound = () => {
  return (
    <Layout>
      <h1>
        <span role="img" aria-label="emoji">
          🙆🏻‍♂️
        </span>
        ... the page you are looking for does not exist
      </h1>
    </Layout>
  )
}

export default notFound
