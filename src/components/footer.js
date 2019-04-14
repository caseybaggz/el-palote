// @flow

import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Logo from './Logo'
import Row from './Row'
import H5 from './typography/H5'
import Instagram from './icons/social/instagram'
import Twitter from './icons/social/twitter'
import media from '../theme/media'

const Wrapper = styled.footer`
  background-color: rgba(28, 23, 20, 0.95);
`

const FooterRow = styled(Row)`
  align-items: center;
  display: flex;
  flex-direction: column;
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

const FooterSectionHeadline = styled(H5)`
  color: ${props => props.theme.secondaryText};
  text-align: center;
  text-transform: uppercase;

  ${media.tablet} {
    text-align: initial;
  }
`

const FooterSectionRow = styled.div`
  padding-top: 30px;

  ${media.tablet} {
    align-items: flex-start;
    display: flex;
    padding-top: initial;
  }
`

const SectionList = styled.ul`
  list-style: none;
  margin-bottom: 48px;

  ${media.tablet} {
    margin-bottom: 0;
    margin-right: 100px;

    &:last-of-type {
      margin-right: 0;
    }
  }
`

const SocialList = styled(Row)`
  justify-content: center;
  list-style: none;
  margin-top: 22px;

  li {
    margin-right: 22px;
    width: 35px;

    &:last-of-type {
      margin-right: initial;
    }

    a {
      display: inline-block;
      width: 100%;
    }
  }

  ${media.tablet} {
    justify-content: initial;
    margin-right: 24px;
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

const socialData: [
  {
    id: number,
    url: string,
    icon: React.Node
  },
  {
    id: number,
    url: string,
    icon: React.Node
  }
] = [
  {
    id: 0,
    url: 'https://twitter.com/@elpalote',
    icon: Twitter
  },
  {
    id: 1,
    url: 'https://www.instagram.com/elpalote.vegan/?hl=en',
    icon: Instagram
  }
];

type Props = {};

function Footer(props: Props): React.Node {
  const socialIcons: React.Node = React.useMemo(() => getSocialLinks(), [socialData]);

  function getSocialLinks(): React.Node {
    return socialData.map(obj => (
      <li key={obj.id}>
        <a href={obj.url}>
          <obj.icon />
        </a>
      </li>
    ));
  }

  return(
    <Wrapper>
      <FooterRow>
        <Logo color="lightText" />

        <FooterSectionRow>
          <SectionList>
            <li>
              <FooterSectionHeadline>visit and eat</FooterSectionHeadline>
            </li>
            {[]}
          </SectionList>
        </FooterSectionRow>

        <SocialList as="ul">
          {socialIcons}
        </SocialList>
      </FooterRow>
      <Legal>
        &copy; Copyright 2019 El Palote
      </Legal>
    </Wrapper>
  );
}

export default React.memo(Footer);