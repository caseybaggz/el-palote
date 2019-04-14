// @flow

import styled from "styled-components"

const H1 = styled.h1`
  color: ${props => props.color || props.theme.darkText};
  font-family: ${props => props.theme.headlineFont};
  font-size: 96px;
  font-weight: 600;
  margin: 0;
`

export default H1
