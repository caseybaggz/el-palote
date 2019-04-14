// @flow

import styled from "styled-components"

const Caption = styled.p`
  color: ${props => props.color || props.theme.darkText};
  font-family: ${props => props.theme.bodyFont};
  font-size: 12px;
  letter-spacing: 0.3px;
  line-height: 1.3;
`

export default Caption
