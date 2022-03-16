import { createGlobalStyle } from "styled-components"

export const colours = {
  red: "#e69eab",
  blue: "#becfee",
  green: "#adebce",
  yellow: "#ffdb70",
  orange: "#feb95f",
  text: "black",
  textAlt: "white",
  foreground: "white",
  background: "#f0ead6",
  backgroundAlt: "black",
  link: "#3772ff",
  linkHover: "#5E4B56",
}

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        // border: 1px solid green;
    }
    html {
        width: 100%;
        height: 100%;
    }
    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: ${colours.background};
        color: black;
        font-size: 1.125rem;
        font-family: "Roboto", Arial, Helvetica, sans-serif;
        line-height: 1.5rem;
        font-weight: 400;
    }
    h1 {
        font-weight: 700;
        font-size: 2rem;
        line-height: 2.375rem;
        color: black;
        margin: 2rem 0rem;
        @media (min-width: 1200px) {
            font-size: 2.625rem;
            line-height: 4rem;
        }
    }
    h2 {
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.5rem;
        color: black;
        @media (min-width: 1200px) {
            font-size: 2rem;
            line-height: 3rem;
        }
    }
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
`

export default GlobalStyle
