import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import HeroNoDescription from "../components/heroShort"
import styled from "styled-components"

const HighlightedText = styled.h2`
  box-shadow: inset 0 -2.5rem 0 #E69EAB;
`

const IndexPage = () => {
  return (
    <Layout>
      <HeroNoDescription />
      <div>
<HighlightedText>teach</HighlightedText>
      </div>
     
    </Layout>
  )
}

export default IndexPage