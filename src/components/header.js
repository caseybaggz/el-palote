// @flow

import React from "react"
import styled from 'styled-components';
import Logo from '../images/logo.svg';

const HeaderEl = styled.header`
  align-items: center;
  background-color: ${props => props.theme.white};
  display: flex;
  justify-content: center;
  padding-bottom: 12px;
  padding-top: 12px;
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
  return (
    <HeaderEl>
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
