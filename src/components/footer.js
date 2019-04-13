// @flow

import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import media from '../theme/media';

const Wrapper = styled.footer`
  background-color: rgba(28, 23, 20, 0.95);
`

const FooterRow = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column-reverse;
  padding-bottom: 44px;
  padding-top: 44px;

  ${media.tablet} {
    align-items: flex-start;
    flex-direction: row;
    min-height: 528px;
    padding-bottom: 135px;
    padding-left: 102px;
    padding-right: 181px;
    padding-top: 109px;
  }
`

const Legal = styled.div`
  align-items: center;
  background-color: ${props => props.theme.black};
  color: ${props => props.theme.lightText};
  display: flex;
  justify-content: center;
  padding: 22px;

  ${media.tablet} {
    padding-left: 102px;
    padding-right: 102px;
  }
`

const footer = (
  <Wrapper>
    <FooterRow>
      jfkdls
    </FooterRow>
    <Legal>
      &copy; El Palote Foods 2019
    </Legal>
  </Wrapper>
);

type Props = {};

function Footer(props: Props): React.Node {
  return footer;
}

export default React.memo(Footer);