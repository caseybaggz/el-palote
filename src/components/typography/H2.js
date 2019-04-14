// @flow

import styled from "styled-components"

const H2 = styled.h2`
  color: ${props => props.color || props.theme.darkText};
  font-family: ${props => props.theme.headlineFont};
  font-size: 60px;
  font-weight: 600;
`

export default H2
