// @flow

import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Body1 from "./typography/Body1"

const LinkItem = styled(Link)`
  display: inline-block;
  text-decoration: none;

  p {
    color: ${props => props.theme.accent3};
    transition: color 150ms ease-out;
  }

  &.active {
    p {
      color: ${props => props.theme.accent2};
    }
  }

  &:hover {
    p {
      color: ${props => props.theme.accent1};
    }
  }
`

type Props = {
  children?: React.Node,
  to: string,
}

function TextLink(props: Props): React.Node {
  return (
    <LinkItem activeClassName="active" to={props.to}>
      <Body1>{props.children}</Body1>
    </LinkItem>
  )
}

export default React.memo(TextLink)
