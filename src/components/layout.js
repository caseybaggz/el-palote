// @flow

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from 'styled-components'
import Header from "./header"
import GlobalStyle from "../theme/GlobalStyle"
import mainTheme from "../theme/mainTheme"

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

            <div>{props.children}</div>

            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </>
        </ThemeProvider>
      )}
    />
  )
}

export default React.memo(Layout)
