import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import MenuHeader from "./menuHeader"
import image from "../images/heroPicture.png"

// const StyledSection = styled.div`
//   .title {
//     margin-bottom: 0;
//   }
//   .subtitle {
//     margin-top: 0;
//   }
//   .hero-image {
//     display: block;
//     text-align: right;
//   }
//   .description {
//   }
//   .container {
//   }
//   .parent {
//     display: grid;
//     grid-template-columns: 2fr 4fr;
//     grid-template-rows: 1fr;
//     grid-column-gap: 15px;
//     grid-row-gap: 0px;
//   }
//   .div1 {
//     grid-area: 1 / 1 / 2 / 2;
//     text-align: center;
//   }
//   .div2 {
//     grid-area: 1 / 2 / 2 / 3;
//   }
// `
const StyledSection = styled.div``
const Hero = () => {
  return (
    <StyledSection>
      <div class="parent">
        <div class="div1">
          <Link to="/">
            <img
              src={image}
              alt="Emilio Ziniades"
              class="hero-image"
              width="100px"
              height="auto"
            />
          </Link>
        </div>
        <div class="div2">
          <h1 className="title">
            Hello{" "}
            <span role="img" aria-label="emoji">
              👋
            </span>
            <br />
            I'm <Link to="/">Emilio Ziniades</Link>
          </h1>
          <MenuHeader />
          <div className="description">
            <br />
            Interdisciplinary research into Political Economy, Cryptocurrencies,
            and Tech. Based in Cape Town.
          </div>
        </div>
      </div>
    </StyledSection>
  )
}

export default Hero
