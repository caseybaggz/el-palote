// @flow

import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Body1 from "./typography/Body1"

const LinkItem = styled(Body1)`
  color: ${props => props.theme.accent3};
  display: inline-block;
  text-decoration: none;
  transition: color 150ms ease-out;

  &.active {
    color: ${props => props.theme.accent2};
  }

  &:hover {
    color: ${props => props.theme.accent1};
  }
`

type Props = {
  children?: React.Node,
  to: string,
}

function TextLink(props: Props): React.Node {
  return (
    <LinkItem as={Link} activeClassName="active" to={props.to}>
      {props.children}
    </LinkItem>
  )
}

export default React.memo(TextLink)
