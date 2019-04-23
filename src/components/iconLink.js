// @flow

import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import H6 from './typography/H6'
import IconArrow from './icons/arrow'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  margin-top: 36px;

  &:hover {
    div {
      transform: translate3d(6px, 0, 0);
    }
  }
`

const LinkText = styled(H6)`
  position: relative;
  text-transform: uppercase;

  &::after {
    background-color: ${props => props.theme.accent2};
    display: block;
    content: "";
    height: 4px;
    width: 100%;
  }
`

const IconWrapper = styled.div`
  display: inline-block;
  margin-left: 6px;
  transition: transform 150ms ease-out;
  width: 24px;
`

type Props = {
  label: string,
  to: string,
}

function IconLink(props: Props): React.Node {
  return (
    <Wrapper>
      <LinkText as={Link} to={props.to}>
        {props.label}
      </LinkText>
      <IconWrapper>
        <IconArrow />
      </IconWrapper>
    </Wrapper>
  )
}

IconLink.defaultProps = {
  label: 'label',
  to: '/'
}

export default React.memo(IconLink)
