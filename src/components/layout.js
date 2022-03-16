import React from "react"

import { StyledContainer, StyledInnerContainer } from "./styles"
import GlobalStyle from "./globalStyle"
import Header from "./header"
import Container from "react-bootstrap/Container"

const Layout = ({ pageTitle, children }) => {
  return (
    <Container fluid="sm">
      <StyledContainer fluid="sm">
        <GlobalStyle />
        <title>{pageTitle}</title>
        <Header />
        <main id="main-content">
          {pageTitle && <h1 className="text-center">{pageTitle}</h1>}
          {children}
        </main>
      </StyledContainer>
    </Container>
  )
}

export default Layout
