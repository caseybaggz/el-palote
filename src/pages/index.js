// @flow

import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import DescriptionSection from "../components/descriptionSection"
import H4 from "../components/typography/H4"
import H6 from "../components/typography/H6"
import media from "../theme/media"
import TacosImg from "../images/tacos-desktop-min.jpg"

const Feature = styled.div`
  margin-bottom: 48px;
  position: relative;
  width: 100%;

  &::after {
    background-color: ${props => props.theme.accent2};
    bottom: -30px;
    border-radius: 8px;
    content: "😍 🌮 😍";
    display: block;
    font-size: 24px;
    left: 0;
    margin: auto;
    padding: 12px;
    position: absolute;
    right: 0;
    text-align: center;
    width: 100px;
  }

  ${media.tablet} {
    background: url(${TacosImg}) no-repeat center center
      ${props => props.theme.pureWhite};
    background-size: cover;
    height: 90vh;
    margin-bottom: initial;

    &::after {
      bottom: -40px;
      font-size: 36px;
      width: 150px;
    }
  }
`

const ImageWrapper = styled.div`
  width: 100%;

  ${media.tablet} {
    display: none;
  }
`

const StatementGroup = styled.div`
  bottom: 87px;
  left: 12px;
  position: absolute;
  width: 287px;
  z-index: 1;

  ${media.tablet} {
    bottom: 200px;
    left: 42px;
    width: 417px;
  }
`

const Statement = styled(H6)`
  display: inline-block;
  background-color: ${props => props.theme.black};
  color: ${props => props.theme.secondaryText};
  padding: 12px;
  text-transform: uppercase;
  width: auto;

  ${media.tablet} {
    padding: 24px;
    font-size: 34px;
  }
`

const Statement2 = styled(Statement)`
  font-size: 34px;
  margin-top: -1px;
  width: 100%;

  ${media.tablet} {
    font-size: 48px;
  }
`

const dessertsImg: {
  alt: string,
  name: string
} = {
  alt: "desserts",
  name: "desserts"
};

const indexPage: React.node = (
  <Layout>
    <SEO title="El Palote Foods | Home" />
    <Feature>
      <StatementGroup>
        <Statement>handmade</Statement>
        <Statement2 as={H4}>bold flavors</Statement2>
      </StatementGroup>
      <ImageWrapper>
        <Image />
      </ImageWrapper>
    </Feature>

    <DescriptionSection
      secondaryHeadline="from"
      headline="family to table"
      linkText="our menu"
      to="/menu"
    >
      It all started with a life-changing event from Papa. Instead of giving up,
      we asked "How can we keep our tradition of mexican food, and make it
      better for everyone?" The answer was right in front of us the whole time -
      with plants.
    </DescriptionSection>

    <DescriptionSection
      direction="left"
      secondaryHeadline="helping"
      headline="spread the love"
      image={dessertsImg}
      linkText="buy bulk"
      to="/menu"
    >
      Looking for a way to get El Palote meats into your restaurant? Now you can
      order our meats in bulk from our hands straight to the mouths of your
      customers - and they'll love you for it.
    </DescriptionSection>
  </Layout>
)

type Props = {}

function IndexPage(props: Props): React.node {
  return indexPage
}

export default React.memo(IndexPage)
