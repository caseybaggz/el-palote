// @flow

import React from "react"
import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"
import Button from "./button"
import Navicon from "./navicon"
import Logo from "./Logo"
import media from "../theme/media"

const HeaderEl = styled.header`
  align-items: center;
  background-color: ${props => props.theme.white};
  box-shadow: 0 0.2rem 0.5rem 0 rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  padding-bottom: 6px;
  padding-top: 6px;
  position: fixed;
  width: 100%;
  z-index: 10;

  ${media.desktop} {
    justify-content: initial;
    overflow: hidden;
    padding-left: 36px;
  }
`

const NavList = styled.ul`
  display: none;

  ${media.desktop} {
    align-items: center;
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-left: 48px;
    max-width: 400px;

    li {
      margin-right: 36px;
    }
  }
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
    color: ${props => props.theme.accent2};
    position: relative;
  }
`

const ButtonWrapper = styled.div`
  bottom: -1px;
  left: 0;
  position: fixed;
  right: 0;
  z-index: 1;

  ${media.desktop} {
    bottom: initial;
    left: initial;
    position: absolute;
    z-index: initial;

    a {
      padding-bottom: 25px;
      padding-top: 25px;
    }
  }
`

type Props = {
  showMobileNav: () => boolean,
  siteTitle: string,
}

function Header(props: Props): React.Node {
  const data = useStaticQuery(graphql`
    query HeaderNavItemsQuery {
      allNavItemsJson {
        edges {
          node {
            id
            label
            route
          }
        }
      }
    }
  `)
  const [navItems, setNavItems] = React.useState(() => [])

  React.useEffect(() => {
    function getNavItems(): React.Node {
      return data.allNavItemsJson.edges.map(obj => (
        <li key={obj.node.id}>
          <NavLink activeClassName="active" to={obj.node.route}>
            {obj.node.label}
          </NavLink>
        </li>
      ))
    }

    if (!navItems.length) {
      setNavItems(getNavItems())
    }
  }, [data])

  return (
    <HeaderEl>
      <Navicon onOpenNav={props.showMobileNav} />
      <Link to="/">
        <Logo />
      </Link>
      <NavList>{navItems}</NavList>
      <ButtonWrapper>
        <Button as="a" href="https://ordering.app/elpalote/">
          order online
        </Button>
      </ButtonWrapper>
    </HeaderEl>
  )
}

Header.defaultProps = {
  showMobileNav: () => {},
  siteTitle: ``,
}

export default React.memo(Header)
