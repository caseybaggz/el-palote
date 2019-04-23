// @flow

import React from "react"
import { ThemeConsumer } from "styled-components"

const iconArrow = (
  <ThemeConsumer>
    {theme => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          fill={theme.accent2}
          d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
        />
      </svg>
    )}
  </ThemeConsumer>
)

type Props = {}

function IconArrow(props: Props): React.Node {
  return iconArrow
}

export default React.memo(IconArrow)
