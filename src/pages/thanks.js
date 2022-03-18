import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"

export default function Thanks() {
  return (
    <Layout pageTitle="💫 Thank you">
      <Container className="d-flex justify-content-center">
        <Row className="text-center">
          <h2>I will be in touch shortly. </h2>
          <Link to="/" aria-label="home">
            go back
          </Link>
        </Row>
      </Container>
    </Layout>
  )
}
