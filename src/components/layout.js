// @flow

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import Header from "./header"
import Footer from "./footer"
import MobileNav from "./mobileNav"
import GlobalStyle from "../theme/GlobalStyle"
import mainTheme from "../theme/mainTheme"

const Wrapper = styled.div`
  overflow-x: hidden;
  width: 100%;
`

const Content = styled.div`
  padding-top: 76.02px;
`

type Props = {
  children?: React.node,
}

function Layout(props: Props): React.Node {
  const [showNav, setShowNav] = React.useState(false)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={mainTheme}>
      <Wrapper>
        <GlobalStyle />
        <Header
          siteTitle={data.site.siteMetadata.title}
          showMobileNav={setShowNav}
        />
        <Content>{props.children}</Content>
        <Footer />

        {showNav && <MobileNav onClose={setShowNav} />}
      </Wrapper>
    </ThemeProvider>
  )
}

export default React.memo(Layout)
