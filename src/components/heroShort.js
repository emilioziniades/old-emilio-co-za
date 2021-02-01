import React, { useState } from "react"
import styled from "styled-components"
import image from '../images/heroPicture.png'
import { Link } from "gatsby"
import MenuHeader from "./menuHeader"

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
  .hero-image {
    float: left; 
    padding: 50px;
  }
  .description {

  }
`

const HeroNoDescription = () => {
    return (
      <StyledSection id="hero">
        <div className="hero-image">
        <img src={image} />
        </div>
      <h1 className="title">
        Hello <span role="img" aria-label="emoji">👋</span><br />
        I'm <Link to='/' >Emilio Ziniades</Link>
      </h1>
    </StyledSection>
    )
  };

export default HeroNoDescription;