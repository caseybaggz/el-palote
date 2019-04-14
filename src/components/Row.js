// @flow

import styled from "styled-components"

const Row = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: ${props => (props.wrap ? "wrap" : "initial")};
  justify-content: space-between;
  position: relative;
`

export default Row
