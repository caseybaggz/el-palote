// @flow

import React from "react"
import styled from 'styled-components'
import Navicon from './navicon'
import Logo from './Logo'

const HeaderEl = styled.header`
  align-items: center;
  background-color: ${props => props.theme.white};
  display: flex;
  justify-content: center;
  padding-bottom: 6px;
  padding-top: 6px;
  position: fixed;
  width: 100%;
`

type Props = {
  showMobileNav: () => boolean,
  siteTitle: string
}

function Header(props: Props): React.Node {
  return (
    <HeaderEl>
      <Navicon onOpenNav={props.showMobileNav} />
      <Logo />
    </HeaderEl>
  )
}

Header.defaultProps = {
  showMobileNav: () => {},
  siteTitle: ``,
}

export default React.memo(Header)
