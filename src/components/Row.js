// @flow

import styled from "styled-components"

const Row = styled.div`
  align-items: ${props => props.align || "center"};
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  flex-wrap: ${props => (props.wrap ? "wrap" : "initial")};
  justify-content: ${props => props.justify || "space-between"};
  position: relative;
`

export default Row
