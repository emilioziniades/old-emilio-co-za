import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"


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

    padding: 50px;
  }
  .description {

  }
`

const HeroShort = (props) => {
    return (
      <StyledSection id="hero">
        <div className="hero-image">
        <Link to="/">
        <img src={image}
        alt='Emilio Ziniades' />
        </Link>
        </div>
      <h1 className="title">
        Hello <span role="img" aria-label="emoji">👋</span><br />
        I'm <Link to='/' >Emilio Ziniades</Link>
      </h1>
      <h2>I <span className={props.class}>{props.text}</span></h2>
    </StyledSection>


    )
  };

export default HeroShort;