import React from 'react'

import HeroShort from "../components/heroShort"
import Layout from '../components/layout'

export default function() {
    return (
  <Layout>
    <HeroShort text='teach' class='highlighted1'/>
    <section className="section">
      <div className="container">
        <div className="content">
          <h1>Thank you! I will be in touch shortly. </h1>
        </div>
      </div>
    </section>
  </Layout>
    )
}

