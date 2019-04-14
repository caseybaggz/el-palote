// @flow

import styled from "styled-components"

const H6 = styled.h6`
  color: ${props => props.color || props.theme.darkText};
  font-family: ${props => props.theme.headlineFont};
  font-size: 20px;
  font-weight: 600;
`

export default H6
