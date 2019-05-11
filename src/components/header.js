// @flow

import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'
import Navicon from "./navicon"
import Logo from "./Logo"

const HeaderEl = styled.header`
  align-items: center;
  background-color: ${props => props.theme.white};
  box-shadow: 0 0.2rem 0.5rem 0 rgba(0,0,0,0.06);
  display: flex;
  justify-content: center;
  padding-bottom: 6px;
  padding-top: 6px;
  position: fixed;
  width: 100%;
  z-index: 10;
`

type Props = {
  showMobileNav: () => boolean,
  siteTitle: string,
}

function Header(props: Props): React.Node {
  return (
    <HeaderEl>
      <Navicon onOpenNav={props.showMobileNav} />
      <Link to="/">
        <Logo />
      </Link>
    </HeaderEl>
  )
}

Header.defaultProps = {
  showMobileNav: () => {},
  siteTitle: ``,
}

export default React.memo(Header)
