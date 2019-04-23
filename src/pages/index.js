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

const Feature = styled.div`
  position: relative;
  width: 100%;
`

const ImageWrapper = styled.div`
  width: 100%;

  ${media.tablet} {
    width: 50%;
  }
`

const StatementGroup = styled.div`
  bottom: 87px;
  left: 12px;
  position: absolute;
  z-index: 1;
`

const Statement = styled(H6)`
  display: inline-block;
  background-color: ${props => props.theme.black};
  color: ${props => props.theme.secondaryText};
  padding: 12px;
  text-transform: uppercase;
  width: auto;
`

const Statement2 = styled(Statement)`
  font-size: 34px;
  margin-top: -1px;
`

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
      to="/menu"
    >
      It all started with a life-changing event from Papa. Instead of giving up,
      we asked "How can we keep our tradition of mexican food, and make it
      better for everyone?" The answer was right in front of us the whole time -
      with plants.
    </DescriptionSection>
  </Layout>
)

type Props = {}

function IndexPage(props: Props): React.node {
  return indexPage
}

export default React.memo(IndexPage)
