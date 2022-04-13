import { createGlobalStyle } from "styled-components"

export const colours = {
  colour1: "#e69eab",
  colour2: "#becfee",
  colour3: "#adebce",
  colour4: "#ffdb70",
  colour5: "#feb95f",
  colour6: "rebeccapurple",
  text: "black",
  textSecondary: "grey",
  foreground: "white",
  background: "#f0ead6",
  link: "#3772ff",
  linkHover: "#5E4B56",
}

export const GlobalStyle = createGlobalStyle`
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
        font-weight: 600;
        font-size: 2.625rem;
        line-height: 3rem;
        color: black;
        margin: 0.75rem 0rem;
    }
    h2 {
        font-weight: 700;
        font-size: 2rem;
        line-height: 2rem;
        color: black;
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
    code {
      background-color: #e5e5e3;
      color: ${colours.text};
      font-size: 85%;
      border-radius: 6px;
      padding: .2em .3em;
    }
`

export default GlobalStyle
