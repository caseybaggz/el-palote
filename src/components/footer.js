// @flow

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Logo from "./Logo"
import Row from "./Row"
import TextLink from "./TextLink"
import Body2 from "./typography/Body2"
import H5 from "./typography/H5"
import Instagram from "./icons/social/instagram"
import Twitter from "./icons/social/twitter"
import media from "../theme/media"

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
    padding-bottom: 50px;
    padding-left: 102px;
    padding-right: 181px;
    padding-top: 50px;
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

const ListItem = styled.li`
  margin-top: 24px;
  text-align: center;

  ${media.tablet} {
    text-align: initial;
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
    padding-bottom: 58px;
    padding-left: 102px;
    padding-top: 28px;
  }
`

const Legal = styled.div`
  align-items: center;
  background-color: ${props => props.theme.black};
  display: flex;
  justify-content: center;
  padding: 22px;

  ${media.tablet} {
    padding-left: 102px;
    padding-right: 102px;
  }
`

const Copyright = styled(Body2)`
  color: ${props => props.theme.lightText};
`

const LogoWrapper = styled.div`
  padding-top: 30px;
  text-align: center;
  width: 100%;

  ${media.tablet} {
    padding-left: 102px;
    padding-top: 109px;
    text-align: initial;
  }
`

const socialData: [
  {
    id: number,
    url: string,
    icon: React.Node,
  },
  {
    id: number,
    url: string,
    icon: React.Node,
  },
] = [
  {
    id: 0,
    url: "https://twitter.com/@elpalote",
    icon: Twitter,
  },
  {
    id: 1,
    url: "https://www.instagram.com/elpalote.vegan/?hl=en",
    icon: Instagram,
  },
]

type Props = {}

function Footer(props: Props): React.Node {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      allVisitAndEatJson {
        edges {
          node {
            id
            label
            url
          }
        }
      }
    }
  `)
  const visitAndEatLinks: React.Node = React.useMemo(
    () => getvisitAndEatLinks(),
    [data]
  )
  const socialIcons: React.Node = React.useMemo(() => getSocialLinks(), [
    socialData,
  ])

  function getvisitAndEatLinks(): React.Node {
    return data.allVisitAndEatJson.edges.map(obj => (
      <ListItem key={obj.node.id}>
        <TextLink to={obj.node.url}>{obj.node.label}</TextLink>
      </ListItem>
    ))
  }

  function getSocialLinks(): React.Node {
    return socialData.map(obj => (
      <li key={obj.id}>
        <a href={obj.url}>
          <obj.icon />
        </a>
      </li>
    ))
  }

  return (
    <Wrapper>
      <LogoWrapper>
        <Logo color="lightText" />
      </LogoWrapper>

      <FooterRow>
        <FooterSectionRow>
          <SectionList>
            <li>
              <FooterSectionHeadline>visit and eat</FooterSectionHeadline>
            </li>
            {visitAndEatLinks}
          </SectionList>

          <SectionList>
            <li>
              <FooterSectionHeadline>our company</FooterSectionHeadline>
            </li>
          </SectionList>

          <SectionList>
            <li>
              <FooterSectionHeadline>questions</FooterSectionHeadline>
            </li>
          </SectionList>

          <SectionList>
            <li>
              <FooterSectionHeadline>serve el palote</FooterSectionHeadline>
            </li>
          </SectionList>
        </FooterSectionRow>
      </FooterRow>

      <SocialList as="ul">{socialIcons}</SocialList>

      <Legal>
        <Copyright>&copy; Copyright 2019 El Palote</Copyright>
      </Legal>
    </Wrapper>
  )
}

export default React.memo(Footer)
