import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const AboutHero = ({ blurb }) => {
  return (
    <Row>
      <Col className="d-flex justify-content-center">
        <StaticImage
          src="../images/heroPicture.png"
          alt="Picture of Emilio Ziniades"
          quality={100}
        />
      </Col>
      <Col>
        <p>{blurb}</p>
      </Col>
    </Row>
  )
}

export default AboutHero
