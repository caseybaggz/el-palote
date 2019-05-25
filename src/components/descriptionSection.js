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
  padding-top: 48px;

  ${media.tablet} {
    padding-left: ${props => (props.direction === "left" ? 0 : "42px")};
    padding-right: 0;
    padding-top: 200px;

    &:last-of-type {
      padding-bottom: 0;
    }
  }
`

const Column = styled.div`
  display: block;
  width: 100%;

  ${media.tablet} {
    align-items: center;
    display: flex;
    flex-direction: ${props =>
      props.direction === "left" ? "row-reverse" : "initial"};
    justify-content: space-between;
  }
`

const InnerColumn = styled.div`
  width: 100%;

  ${media.tablet} {
    width: 50%;

    &:first-of-type {
      width: ${props => (props.direction === "left" ? "35%" : "50%")};
    }
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
type ImageProp = {
  alt: string,
  name: string,
}
type Props = {
  children?: React.Node,
  direction?: string,
  headline: string,
  linkText: string,
  image: ImageProp,
  secondaryHeadline?: string,
  to: string,
}

function DescriptionSection(props: Props): React.Node {
  const data = useStaticQuery(graphql`
    query {
      bbqImage: file(relativePath: { eq: "bbq-sandwich.png" }) {
        childImageSharp {
          fluid(maxWidth: 720, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dessertsImage: file(relativePath: { eq: "desserts.png" }) {
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
    <Wrapper direction={props.direction}>
      <Column direction={props.direction}>
        <InnerColumn direction={props.direction}>
          <HeadlineWrapper>
            {secondaryHeadline && (
              <SecondaryHealdine>{secondaryHeadline}</SecondaryHealdine>
            )}
            <Headline>{props.headline}</Headline>
          </HeadlineWrapper>

          <ImgWrapper>
            <Img
              alt={props.image.alt}
              fluid={data[`${props.image.name}Image`].childImageSharp.fluid}
              title={`El Palote ${props.image.alt}`}
            />
          </ImgWrapper>

          <div>
            {children && (
              <Content>
                <Body1>{children}</Body1>
              </Content>
            )}
            <IconLink to={props.to} label={props.linkText} />
          </div>
        </InnerColumn>

        <InnerColumn>
          <ImgDesktopWrapper>
            <Img
              alt={props.image.alt}
              fluid={data[`${props.image.name}Image`].childImageSharp.fluid}
              title={`El Palote ${props.image.alt}`}
            />
          </ImgDesktopWrapper>
        </InnerColumn>
      </Column>
    </Wrapper>
  )
}

DescriptionSection.defaultProps = {
  direction: "",
  headline: "headline",
  linkText: "linkText",
  image: {
    alt: "bbq sandwich",
    name: "bbq",
  },
  secondaryHeadline: "secondaryHeadline",
  to: "/",
}

export default React.memo(DescriptionSection)
