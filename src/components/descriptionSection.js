// @flow

import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import IconLink from "./iconLink"
import Body1 from "./typography/Body1"
import H3 from "./typography/H3"
import H6 from "./typography/H6"
import media from "../theme/media"

const Wrapper = styled.div`
  background-color: ${props => props.theme.white};
  padding-bottom: 36px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 36px;

  ${media.tablet} {
    padding-right: 0;
    padding-left: 42px;
    padding-top: 200px;
  }
`

const Column = styled.div`
  display: block;
  width: 100%;

  ${media.tablet} {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`

const InnerColumn = styled.div`
  width: 100%;

  ${media.tablet} {
    width: 50%;
  }
`

const HeadlineWrapper = styled.div`
  max-width: 270px;

  ${media.tablet} {
    max-width: 500px;
  }
`

const Headline = styled(H3)`
  line-height: 1;
  margin-bottom: 28px;
  text-transform: uppercase;
`

const SecondaryHealdine = styled(H6)`
  color: ${props => props.theme.secondaryText};
  text-transform: uppercase;
`

const ImgWrapper = styled.div`
  margin-bottom: 40px;
  width: 100%;

  ${media.tablet} {
    display: none;
  }
`

const ImgDesktopWrapper = styled(ImgWrapper)`
  display: none;

  ${media.tablet} {
    display: block;
  }
`

const Content = styled.div`
  ${media.tablet} {
    max-width: 400px;
  }
`

type Props = {
  children?: React.Node,
  headline: string,
  secondaryHeadline?: string,
  to: string,
}

function DescriptionSection(props: Props): React.Node {
  const data = useStaticQuery(graphql`
    query {
      headerImage: file(relativePath: { eq: "bbq-sandwich.png" }) {
        childImageSharp {
          fluid(maxWidth: 720, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const { children, secondaryHeadline } = props

  return (
    <Wrapper>
      <Column>
        <InnerColumn>
          <HeadlineWrapper>
            {secondaryHeadline && (
              <SecondaryHealdine>{secondaryHeadline}</SecondaryHealdine>
            )}
            <Headline>{props.headline}</Headline>
          </HeadlineWrapper>

          <ImgWrapper>
            <Img
              alt="bbq sandwich"
              fluid={data.headerImage.childImageSharp.fluid}
              title="El Palote bbq sandwich"
            />
          </ImgWrapper>

          <div>
            {children && (
              <Content>
                <Body1>{children}</Body1>
              </Content>
            )}
            <IconLink to={props.to} label="our menu" />
          </div>
        </InnerColumn>

        <InnerColumn>
          <ImgDesktopWrapper>
            <Img
              alt=""
              fluid={data.headerImage.childImageSharp.fluid}
              title="El Palote "
            />
          </ImgDesktopWrapper>
        </InnerColumn>
      </Column>
    </Wrapper>
  )
}

DescriptionSection.defaultProps = {
  headline: "headline",
  secondaryHeadline: "secondaryHeadline",
  to: "/",
}

export default React.memo(DescriptionSection)
