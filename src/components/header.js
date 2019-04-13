// @flow

import React from "react"
import styled from 'styled-components';
import Navicon from './navicon';
import Logo from '../images/logo.svg';

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

const ImgWrapper = styled.div`
  display: inline-block;
  width: 200px;

  img {
    display: inline-block;
    width: 100%;
  }
`


type Props = {
  siteTitle: string,
}

function Header(props: Props): React.Node {
  function handleOpenNav() {
    console.log('open nav');
  }

  return (
    <HeaderEl>
      <Navicon onOpenNav={handleOpenNav} />
      <ImgWrapper>
        <img alt="logo" src={Logo} />
      </ImgWrapper>
    </HeaderEl>
  )
}

Header.defaultProps = {
  siteTitle: ``,
}

export default React.memo(Header)
