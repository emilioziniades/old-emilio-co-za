import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Spacer from "react-spacer"



import MenuHeader from "./menuHeader"
import image from '../images/heroPicture.png'

const StyledSection = styled.div`
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
  .hero-image {
    padding: 10px;
  }
  .description {

  }
  .container {

  }
`

const Hero = () => {
  return (
    <StyledSection id="hero">
      <div className="hero-image">
        <Link to="/">
        <img src={image} alt="Emilio Ziniades"/>
        </Link>
      </div>
    <div>
    <h1 className="title">
      Hello <span role="img" aria-label="emoji">👋</span><br />
      I'm <Link to='/' >Emilio Ziniades</Link>
    </h1>
    <MenuHeader />
    <div className="description">
      Interdisciplinary research into Political Economy, Cryptocurrencies, and Tech. Based in Cape Town.
    </div>
    </div>

    <Spacer/>
    </StyledSection>
  )
};

export default Hero
