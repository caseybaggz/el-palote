// @flow

import React from "react"
import { ThemeConsumer } from 'styled-components'

const twitterIcon = (
  <ThemeConsumer>
    {theme => (
      <svg viewBox="0 0 35 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.007 28.44c13.207 0 20.431-10.943 20.431-20.432 0-.311 0-.62-.02-.928A14.61 14.61 0 0 0 35 3.363c-1.31.58-2.7.961-4.124 1.13A7.206 7.206 0 0 0 34.033.52a14.39 14.39 0 0 1-4.56 1.743 7.188 7.188 0 0 0-12.238 6.549A20.387 20.387 0 0 1 2.436 1.31a7.186 7.186 0 0 0 2.223 9.586A7.126 7.126 0 0 1 1.4 9.997v.091a7.183 7.183 0 0 0 5.761 7.04 7.17 7.17 0 0 1-3.242.122 7.189 7.189 0 0 0 6.708 4.987A14.409 14.409 0 0 1 0 25.214a20.33 20.33 0 0 0 11.007 3.22"
          fill={theme.accent3}
        />
      </svg>
    )}
  </ThemeConsumer>
)

function Twitter(props: Props) {
  return twitterIcon;
}

export default React.memo(Twitter)
