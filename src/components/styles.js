import styled from "styled-components"

import { colours } from "./globalStyle"
import { Link } from "gatsby"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Form from "react-bootstrap/Form"

export const StyledContainer = styled(Container)`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-colums: 100%;
  #main-content {
    width: 100%;
    max-width: 62.5rem;
    margin: 0 auto;
    padding: 0 2.5rem;
    margin-bottom: 4rem;
  }
  h1 {
    padding: 0rem 2rem;
  }
`

export const StyledArticle = styled(Card)`
  background: ${colours.foreground};
  padding: 2rem !important;
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
  padding: 1rem;
  margin: 2rem;
  text-align: ${props => (props.center ? "center" : "inherit")};
  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
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
`

export const StyledHeader = styled.header`
  width: 100%;
  max-width: 62.5rem;
  height: 6.25rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  background: inherit;
  justify-content: space-between;
  align-items: center;

  .secondary-item {
    color: grey;
    text-decoration: none;
    font-weight: 400px;
  }
`
export const StyledFooter = styled.footer`
  height: 5rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  background: ${colours.backgroundAlt};
  color: ${colours.textAlt};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  text-transform: lowercase;
  letter-spacing: +1px;
  font-weight: 700;
  a {
    color: ${colours.textAlt};
    text-decoration: none;
  }
`

export const StyledNav = styled(Nav)`
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
    box-shadow: inset 0 -2.5rem 0 ${colours.green};
    text-decoration: none;
  }
  .active-teach {
    box-shadow: inset 0 -2.5rem 0 ${colours.red};
    text-decoration: none;
  }
  .active-write {
    box-shadow: inset 0 -2.5rem 0 ${colours.blue};
    text-decoration: none;
  }
  .active-contact {
    box-shadow: inset 0 -2.5rem 0 ${colours.yellow};
    border: none;
  }
  .active-about {
    box-shadow: inset 0 -2.5rem 0 ${colours.orange};
    border: none;
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
  img {
    width: 20rem;
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
    box-shadow: inset 0 -2.5rem 0 ${colours.green};
  }
  .highlighted-teach {
    box-shadow: inset 0 -2.5rem 0 ${colours.red};
  }
  .highlighted-write {
    box-shadow: inset 0 -2.5rem 0 ${colours.blue};
  }
`
export const StyledForm = styled(Form)`
  max-width: 50rem;
`

export const StyledCard = styled(Card)`
  margin: 1rem;
  padding: 1rem;
  width: 17rem;

  .pill {
    color: black;
  }

  .source-link {
    color: black;
    background: ${colours.blue};
    border: none;
    text-decoration: underline;
  }

  .language {
    background: ${colours.green} !important;
  }

  .framework {
    background: ${colours.orange} !important;
  }

  .topic {
    background: ${colours.yellow} !important;
  }
`
