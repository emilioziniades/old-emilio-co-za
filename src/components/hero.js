import React from "react"
import { Link } from "gatsby"

import HeroMenu from "./heroMenu"
import { StyledHero } from "./styles"
import image from "../images/heroPicture.png"

const Hero = () => {
  return (
    <StyledHero>
      <div className="parent">
        <div className="div1">
          <Link to="/">
            <img
              src={image}
              alt="Emilio Ziniades"
              className="hero-image"
              width="180rem"
              height="auto"
            />
          </Link>
        </div>
        <div className="div2">
          <h1 className="title">
            Hello{" "}
            <span role="img" aria-label="emoji">
              👋
            </span>
            <br />
            I'm <Link to="/">Emilio Ziniades</Link>
          </h1>
          <HeroMenu />
          <div className="description">
            <br />
            Interdisciplinary research into Political Economy, Cryptocurrencies,
            and Tech. Based in Cape Town.
          </div>
        </div>
      </div>
    </StyledHero>
  )
}

export default Hero
