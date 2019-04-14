// @flow

import styled from "styled-components"

const Body2 = styled.p`
  color: ${props => props.color || props.theme.darkText};
  font-family: ${props => props.theme.bodyFont};
  font-size: 14px;
  letter-spacing: 0.2px;
  line-height: 1.3;
`

export default Body2
