// @flow

import styled from "styled-components"

const Overline = styled.p`
  color: ${props => props.color || props.theme.darkText};
  font-family: ${props => props.theme.bodyFont};
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 1.3;
  text-transform: uppercase;
`

export default Overline
