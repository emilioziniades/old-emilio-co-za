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
.hero-image {
  display: block;
  text-align: right;
}
.parent {
  display: grid;
  grid-template-columns: 2fr 4fr;
  grid-template-rows: 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 0px;
  } 
  .div1 { 
    grid-area: 1 / 1 / 2 / 2;
    text-align: center;
  }
.div2 { grid-area: 1 / 2 / 2 / 3; } 
.highlighted {
  box-shadow: inset 0 -2.5rem 0 #cdf3e1;
}
.highlighted1 {
  box-shadow: inset 0 -2.5rem 0 #E69EAB;
}
.highlighted2 {
  box-shadow: inset 0 -2.5rem 0 #BECFEE;
}
`
const HeroShort = (props) => {
  return(
    <StyledSection>
    <div class="parent">
      <div class="div1"> 
        <Link to="/">
          <img src={image} alt="Emilio Ziniades" class='hero-image'/>
        </Link>
      </div>
      <div class="div2"> 
        <h1 className="title">
          Hello <span role="img" aria-label="emoji">👋</span><br />
          I'm <Link to='/' >Emilio Ziniades</Link>
        </h1>
        <h2>
          I <span className={props.class}>{props.text}</span>
          </h2>
      </div>
    </div> 
  </StyledSection>
  )

}

export default HeroShort;