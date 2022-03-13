import React from "react"

import { StyledLayout } from "./styles"
import GlobalStyle from "./globalStyle"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ pageTitle, children }) => {
  return (
    <StyledLayout>
      <GlobalStyle />
      <title>{pageTitle}</title>
      <Header />
      <main id="main-content">
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </StyledLayout>
  )
}

export default Layout
