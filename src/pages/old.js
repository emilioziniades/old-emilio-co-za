import React from "react"
import {Helmet} from "react-helmet";
import Layout from "../components/layout"

// var frontImage = require("../../static/emilio-front-picture.png")
export default function Home() {
  return (
    <div>
  <Helmet>
      <meta charSet="utf-8" />
      <title>Emilio Ziniades</title>
      <link rel="canonical" href="https://emilio.co.za" />
  </Helmet>  
  <Layout>
    <div>
      </div>
      <div>
        <p> I'm Emilio. I like to build things, investigate things and write things</p>
      </div>
    <a href="mailto:emilioziniades@gmail.com">📪 Want to get in touch? </a>
  </Layout>
  </div>
  )
}