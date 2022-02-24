import React from "react"

import Layout from "../layout"
import HeroShort from "../heroShort"

import TeachHeader from "./teachPageHeader"
import Blurb from "./teachPageBlurb"
import Offering from "./teachPageOffering"
import ContactForm from './ContactForm'


const TeachPage = () => {
    return (
      <Layout>
        <HeroShort text='teach' class='highlighted1'/>
        <div style={{boxShadow: "gray 0px 100px 20px 8px"}}>
        <TeachHeader />
        <Blurb />
        <Offering />
        <ContactForm />
        </div>
      </Layout>
    )
  }
  
  export default TeachPage
