import React from "react"
import styled from "styled-components"

import { colours } from "./globalStyle"
import { Link } from "gatsby"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Form from "react-bootstrap/Form"

export const StyledContainer = styled(Container)`
  width: 100%;
  margin: 0 auto;
  #main-content {
    width: 100%;
    max-width: 62.5rem;
  }
  h1 {
    padding: 0rem 2rem;
  }
`

const Article = styled(Card)`
  background: ${colours.foreground};
  a {
    display: inline-block;
    text-decoration: underline;
    text-decoration-skip-ink: auto;
    color: ${colours.link};
    cursor: pointer;
    &:hover,
    &:focus {
      outline: 0;
      color: ${colours.linkHover};
    }
  }
  text-align: ${props => (props.center ? "center" : "inherit")};
  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }
  table {
    margin: 2rem 0;
  }
  table,
  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  td {
    text-align: center;
  }
  img {
    width: 100%;
    height: auto;
    margin: 2rem 0;
  }
`
export const StyledArticle = ({ children }) => {
  return <Article className="p-lg-5 p-3 m-lg-5 m-3">{children}</Article>
}
export const StyledHeader = styled.header`
  width: 100%;
  max-width: 62.5rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  background: inherit;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${colours.text};
    text-decoration: underline;
    font-size: 1.5rem;
    padding: 0.25rem 0.75rem;
    font-weight: 700;
  }
  ul {
    list-style-type: none;
    display: float;
  }
  .menu-item {
    margin: 0.25rem;
  }

  .contact-link {
    border: 0.15rem solid black;
    padding: 0.25rem 0.75rem;
    text-decoration: none;
  }
  .active-code {
    box-shadow: inset 0 -2.5rem 0 ${colours.colour3};
    text-decoration: none;
  }
  .active-teach {
    box-shadow: inset 0 -2.5rem 0 ${colours.colour1};
    text-decoration: none;
  }
  .active-write {
    box-shadow: inset 0 -2.5rem 0 ${colours.colour2};
    text-decoration: none;
  }
  .active-contact {
    box-shadow: inset 0 -2.5rem 0 ${colours.colour4};
    border: none;
  }
  .active-about {
    box-shadow: inset 0 -2.5rem 0 ${colours.colour5};
    border: none;
  }

  .secondary-item {
    color: ${colours.textSecondary};
    text-decoration: none;
    font-weight: 400px;
  }
`
export const StyledLogo = styled(Link)`
  font-size: 2rem;
  font-weight: 900;
  color: ${colours.text} !important;
  margin: 1rem;
  padding: 1rem;
  text-decoration: none !important;
`

export const StyledHero = styled.div`
  a {
    text-decoration: none;
    color: ${colours.text};
  }
`

export const StyledHeroMenu = styled.section`
  .title {
    margin-bottom: 0;
  }
  .subtitle {
    margin-top: 0;
  }
  .menu-header {
    display: inline-block;
    float: left;
    padding: 4px 4px 4px 4px;
  }
  .hero-image {
    float: left;
  }
  .highlighted-code {
    box-shadow: inset 0 -2.5rem 0 ${colours.colour3};
  }
  .highlighted-teach {
    box-shadow: inset 0 -2.5rem 0 ${colours.colour1};
  }
  .highlighted-write {
    box-shadow: inset 0 -2.5rem 0 ${colours.colour2};
  }
`
export const StyledForm = styled(Form)`
  max-width: 50rem;
`

export const StyledCard = styled(Card)`
  width: 17rem;

  .pill {
    color: black;
  }

  .language {
    background: ${colours.colour3} !important;
  }

  .framework {
    background: ${colours.colour5} !important;
  }

  .topic {
    background: ${colours.colour4} !important;
  }
`
