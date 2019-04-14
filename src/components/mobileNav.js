// @flow

import React from "react"
import styled, { keyframes } from "styled-components"
import { Link } from "gatsby"
import Logo from "./Logo"

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const slideIn = keyframes`
  from {
    transform: translate3d(-100%, 0, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`

const Wrapper = styled.div`
  bottom: 0;
  height: 100vh;
  left: 0;
  overflow: hidden;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 10;
`

const Overlay = styled.div`
  animation: ${fadeIn} 250ms ease-out;
  animation-fill-mode: forwards;
  background-color: rgba(28, 23, 20, 0.8);
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 0;
`

const SideBar = styled.div`
  animation: ${slideIn} 250ms ease-out;
  animation-fill-mode: forwards;
  animation-delay: 300ms;
  background-color: ${props => props.theme.white};
  bottom: 0;
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  transform: translate3d(-100%, 0, 0);
  width: 85%;
`

const NavList = styled.ul`
  list-style: none;
  padding: 12px 24px;
  width: 100%;
`

const NavLink = styled(Link)`
  border-left: 4px solid transparent;
  color: ${props => props.theme.accent3};
  display: block;
  letter-spacing: 1px;
  padding-bottom: 24px;
  padding-top: 24px;
  text-transform: uppercase;

  &.active {
    border-left: 4px solide ${props => props.theme.accent2};
    color: ${props => props.theme.accent2};
  }
`

const navData = [
  {
    id: 0,
    label: "menu",
    to: "/menu",
  },
  {
    id: 1,
    label: "locations",
    to: "/locations",
  },
  // {
  //   id: 3,
  //   label: "catering",
  //   to: "/catering",
  // },
  // {
  //   id: 4,
  //   label: "merch",
  //   to: "/merch",
  // },
]

type Props = {
  onClose: () => boolean,
}

function MobileNav(props: Props): React.Node {
  const navItems: React.Node = React.useMemo(() => getNavItems(), [navData])

  function getNavItems(): React.Node {
    return navData.map(obj => (
      <li key={obj.id}>
        <NavLink activeClassName="active" to={obj.to}>
          {obj.label}
        </NavLink>
      </li>
    ))
  }

  function handleClose() {
    props.onClose(false)
  }

  return (
    <Wrapper>
      <Overlay onClick={handleClose} />
      <SideBar>
        <NavList>
          <li>
            <Logo size="180" />
          </li>
          {navItems}
        </NavList>
      </SideBar>
    </Wrapper>
  )
}

MobileNav.defaultProps = {
  onClose: () => {},
}

export default React.memo(MobileNav)
