import React from "react"

import Layout from "../layout"
import HeroShort from "../heroShort"

import Blurb from "./teachPageBlurb"
import Offering from "./teachPageOffering"
import TeachHeader from "./teachPageHeader"

const TeachPage = () => {
    return (
      <Layout>
        <HeroShort text='teach' class='highlighted1'/>
        <TeachHeader />
        <Blurb />
        <Offering />
      </Layout>
    )
  }
  
  export default TeachPage