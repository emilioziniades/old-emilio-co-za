import styled from "styled-components"

import { colours } from "./globalStyle"

export const StyledLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
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

export const StyledContainer = styled.div`
  background: ${colours.foreground};
  border: 1px solid black;
  box-shadow: 0px 0px 1px 1px grey;
  padding: 1rem;
  margin: 2rem;
  text-align: ${props => (props.center ? "center" : "inherit")};
  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }
`

export const StyledHeader = styled.header`
  width: 100%;
  max-width: 62.5rem;
  height: 6.25rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  background: inherit;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const StyledFooter = styled.footer`
  width: 100%;
  height: 5.25rem;
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

export const StyledNav = styled.nav`
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
  li {
    padding: 0.25rem 0.5rem;
  }
  .contact {
    margin: 0 2rem;
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
    box-shadow: inset 0 -2.5rem 0 #ffdb70;
    border: none;
  }
`

export const StyledLogo = styled.a`
  font-size: 2rem;
  font-weight: 900;
  color: ${colours.text};
  margin: 1rem;
  padding: 1rem;
  text-decoration: none;
`

export const StyledHero = styled.div`
  a {
    text-decoration: none;
    color: ${colours.text};
  }
  .title {
    margin-bottom: 0;
  }
  .subtitle {
    margin-top: 0;
  }
  .hero-image {
    display: block;
    text-align: right;
    margin-top: 2rem;
  }
  .description {
  }
  .container {
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
  .div2 {
    grid-area: 1 / 2 / 2 / 3;
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
export const StyledForm = styled.div`
   {
    padding: 20px 25% 20px 25%;
    text-align: center;

    input {
      margin: 0rem 1rem;
    }
    textarea {
      margin: 0rem 1rem;
    }
    .container {
      border: 2px solid black;
      box-shadow: 0px 0px 1px 1px grey;
      padding: 0rem 4rem;
      background: white;
    }

    #submit {
      margin: 1rem 0rem;
      padding: 0.1rem 0.6rem;
      font-size: 1.25rem;
      /* color: rebeccapurple; */
      background-color: ${colours.background};
      border: 1px solid black;
      box-shadow: 0px 0px 1px 1px grey;
      text-decoration: bold;
      &:hover {
        background-color: ${colours.green};
      }
  }
`
export const StyledPill = styled.div`
  background-color: ${colours.green};
  border: none;
  color: ${colours.text};
  padding: 4px 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 1rem 0.2rem;
  border-radius: 16px;
`

export const StyledBlogBio = styled.div`
  background-image: linear-gradient(to left, papayawhip, #ccdae0);
  margin: 2rem;
  padding: 1rem;
  display: flex;
  border: 0.25em outset #7d6b91;
  line-height: 0.5rem;
  /* padding: 2rem 1rem; */
  /* align-items: center; */
  /* justify-content: center; */
  img {
    /* padding: 1rem; */
    margin: 1rem;
  }
  h1 {
    padding: 0;
    margin: 0;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-basis: 100%; */
  /* flex: 1; */
  flex-grow: ${props => props.grow}
  align-items: center;
  justify-content: center;
`

export const StyledProjectCard = styled(StyledContainer)`
  h2 {
    margin: 0;
  }
`
export const StyledCodeBio = styled.div`
  background: linear-gradient(
    30deg,
    #68b69d,
    #f3b391,
    #adebce,
    #a677a6,
    #3c7c51,
    #ebbab9
  );
  background-size: 600% 100%;
  animation: gradient 10s linear infinite;
  animation-direction: alternate;

  @keyframes gradient {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 100%;
    }
  }
  margin: 2rem;
  padding: 2rem;
  display: flex;
  border: 0.25em inset black;
  align-items: center;
  color: white;
  text-shadow: 1px 1px 5px black;
  /* justify-content: center; */
  /* img { */
  /* padding: 1rem; */
  /* margin: 1rem; */
  /* } */
  h1 {
    color: white;
  }
  a {
    color: papayawhip;
  }
`
