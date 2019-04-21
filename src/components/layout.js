// @flow

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import Header from "./header"
import Footer from "./footer"
import MobileNav from "./mobileNav"
import GlobalStyle from "../theme/GlobalStyle"
import mainTheme from "../theme/mainTheme"

const Content = styled.div`
  padding-top: 76.02px;
  min-height: 80vh;
`

type Props = {
  children?: React.node,
}

function Layout(props: Props): React.Node {
  const [showNav, setShowNav] = React.useState(false)

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <ThemeProvider theme={mainTheme}>
          <>
            <GlobalStyle />
            <Header
              siteTitle={data.site.siteMetadata.title}
              showMobileNav={setShowNav}
            />
            <Content>{props.children}</Content>
            <Footer />

            {showNav && <MobileNav onClose={setShowNav} />}
          </>
        </ThemeProvider>
      )}
    />
  )
}

export default React.memo(Layout)
