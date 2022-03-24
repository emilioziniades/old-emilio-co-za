import React from "react"

import { StyledContainer } from "./styles"
import GlobalStyle from "./globalStyle"
import Header from "./header"

const Layout = ({ pageTitle, children }) => {
  return (
    <StyledContainer fluid="lg">
      <Header />
      <GlobalStyle />
      <title>{pageTitle}</title>
      <main id="main-content" className="mx-auto">
        {pageTitle && <h1 className="text-center">{pageTitle}</h1>}
        {children}
      </main>
    </StyledContainer>
  )
}

export default Layout
