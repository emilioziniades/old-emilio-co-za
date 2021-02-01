import React, { useState } from "react"
import styled from "styled-components"
import image from '../images/heroPicture.png'
import { Link } from "gatsby"

const StyledSection = styled.section`
  .title {
    margin-bottom: 0;
  }
  .subtitle {
    margin-top: 0;
  }
  .highlighted {
    box-shadow: inset 0 -2.5rem 0 #cdf3e1;
  }
  .highlighted1 {
    box-shadow: inset 0 -2.5rem 0 #E69EAB;
  }
  .highlighted2 {
    box-shadow: inset 0 -2.5rem 0 #BECFEE;
  }
  .highlighted3 {
    box-shadow: inset 0 -2.5rem 0 #cdf3e1;
  }
`

const Hero = () => {
  return (
    <StyledSection id="hero">
      <div style={{float: `left`, padding: '50px'}}>
      <img src={image} />
      </div>
    <h1 className="title">
      Hello <span role="img" aria-label="emoji">👋</span><br />
      I'm <Link to='/' >Emilio Ziniades</Link>
    </h1>
    <h2 className="subtitle">
      I <span className="highlighted1">teach</span>, <span className="highlighted2">write</span> and <span className="highlighted">code</span>.
    </h2>
    <div className="description">
      Interdisciplinary research into Political Economy, Cryptocurrencies, and Tech. Based in Cape Town.
    </div>
  </StyledSection>
  )
};

export default Hero


