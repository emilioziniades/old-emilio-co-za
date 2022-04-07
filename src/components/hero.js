import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import HeroMenu from "./heroMenu"
import { StyledHero } from "./styles"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          author
          blurb
        }
      }
    }
  `)
  return (
    <StyledHero>
      <Row>
        <Col>
          <StaticImage
            src="../images/drawing.png"
            alt="Emilio Ziniades"
            placeholder="blurred"
            loading="eager"
            height={700}
          />
        </Col>
        <Col className="px-4 py-2">
          <h1 className="title">
            Hello{" "}
            <span role="img" aria-label="emoji">
              👋🏼
            </span>
            <br />
            I'm {data.site.siteMetadata.author}
          </h1>
          <HeroMenu />
          <div className="description">
            <br />
            {data.site.siteMetadata.blurb}
          </div>
        </Col>
      </Row>
    </StyledHero>
  )
}
export default Hero
