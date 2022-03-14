import React from "react"

import { StyledBlogBio, Row, Column } from "./styles"
import milkyWay from "../images/milky-way.png"

const BlogBio = () => {
  return (
    <StyledBlogBio>
      <Row>
        <Column grow="2">
          <img src={milkyWay} aria-label="milky-way" height="100" width="100" />
        </Column>
        <Column grow="8">
          <h1>Downwell</h1>
          <p>A space for general musing and fleshing out twitter threads. </p>
        </Column>
      </Row>
    </StyledBlogBio>
  )
}

export default BlogBio
