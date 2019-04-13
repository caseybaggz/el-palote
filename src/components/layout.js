// @flow

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from 'styled-components'
import Header from "./header"
import Footer from './footer'
import GlobalStyle from "../theme/GlobalStyle"
import mainTheme from "../theme/mainTheme"

const Content = styled.div`
  background-color: lightGrey;
  padding-top: 88px;
  min-height: 80vh;
`;

type Props = {
  children?: React.node
}

function Layout(props: Props): React.Node {
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
            <Header siteTitle={data.site.siteMetadata.title} />
            <Content>{props.children}</Content>
            <Footer />
          </>
        </ThemeProvider>
      )}
    />
  )
}

export default React.memo(Layout)
