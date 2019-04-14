// @flow

import styled from "styled-components"

const H4 = styled.h4`
  color: ${props => props.color || props.theme.darkText};
  font-family: ${props => props.theme.headlineFont};
  font-size: 34px;
  font-weight: 600;
`

export default H4
