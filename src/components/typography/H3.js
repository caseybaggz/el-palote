// @flow

import styled from "styled-components"

const H3 = styled.h3`
  color: ${props => props.color || props.theme.darkText};
  font-family: ${props => props.theme.headlineFont};
  font-size: 48px;
  font-weight: 600;
`

export default H3
