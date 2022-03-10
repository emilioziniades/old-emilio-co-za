import React from "react"
import styled from "styled-components"

import Layout from "../layout"
import HeroShort from "../heroShort"

import TeachHeader from "./teachPageHeader"
import Blurb from "./teachPageBlurb"
import Offering from "./teachPageOffering"
import ContactForm from "./ContactForm"

// const ShadowBox = styled.div`
//   box-shadow: gray 0px 100px 20px 8px;
// `

const ShadowBox = styled.div``

const TeachPage = () => {
  return (
    <Layout>
      <HeroShort text="teach" class="highlighted1" />
      <ShadowBox>
        <TeachHeader />
        <Blurb />
        <Offering />
        <ContactForm />
      </ShadowBox>
    </Layout>
  )
}

export default TeachPage
