import React from 'react'
import styled from "styled-components"
import { Link } from "gatsby"

import HeroShort from "../components/heroShort"
import Layout from '../components/layout'

const ThanksBox = styled.div`
{
    text-align: center;
}
`
const ThanksPage = () => {
    return (
  <Layout>
    <HeroShort text='teach' class='highlighted1'/>
        <ThanksBox>
          <h2>Thank you! I will be in touch shortly. </h2>
          <Link to="/" aria-label="home">
            <p><u>go back</u></p>
          </Link>
        </ThanksBox>
  </Layout>
    )
}

export default ThanksPage
