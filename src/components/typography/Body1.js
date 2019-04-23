// @flow

import styled from "styled-components"
import media from "../../theme/media"

const Body1 = styled.p`
  font-family: ${props => props.theme.bodyFont};
  font-size: 16px;
  letter-spacing: 0.2px;
  line-height: 1.6;

  ${media.tablet} {
    line-height: 1.75;
  }
`

export default Body1
