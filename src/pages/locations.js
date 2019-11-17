// @flow

import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { LinkItem } from "../components/TextLink"
import Map from "../components/map"
import Row from "../components/Row"
import H4 from "../components/typography/H4"
import H6 from "../components/typography/H6"
import Subtitle2 from "../components/typography/Subtitle2"
import Body1 from "../components/typography/Body1"
import media from "../theme/media"

const FeatureRow = styled(Row)`
  ${media.desktop} {
    flex-direction: row-reverse;
  }
`

const MapWrapper = styled.div`
  background: url("") no-repeat center center
    ${props => props.theme.primaryLight};
  background-size: cover;
  min-height: 400px;
  width: 100%;

  ${media.desktop} {
    min-height: 100vh;
    width: 70%;
  }
`

const LocationWrapper = styled.div`
  background-color: ${props => props.theme.lightGrey};
  padding-bottom: 48px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
  width: 100%;

  ${media.desktop} {
    width: 30%;
  }
`

const Card = styled.div`
  background-color: ${props => props.theme.pureWhite};
  border: 1px solid ${props => props.theme.border};
  border-radius: 4px;
  padding: 24px;
  width: 100%;
`

const Name = styled(H4)`
  margin-bottom: 24px;
`

const Address = styled(Subtitle2)`
  color: ${props => props.theme.secondaryText};
  margin-bottom: 12px;
`

const Info = styled.div`
  margin-bottom: 12px;
`

const DirectionsLink = styled(LinkItem)`
  border-bottom: 2px solid ${props => props.theme.accent2};
  color: ${props => props.theme.accent2};
  margin-top: 12px;
  transition: border-bottom 150ms ease-out, color 150ms ease-out;

  &.active {
    color: ${props => props.theme.accent2};
  }

  &:hover {
    color: ${props => props.theme.accent3};
    border-bottom: 2px solid ${props => props.theme.accent3};
  }
`

const locationsPage: React.node = (
  <Layout>
    <SEO title="El Palote Foods | Locations" />
    <div>
      <FeatureRow align="initial" justify="initial" wrap="true">
        <MapWrapper>
          <Map />
        </MapWrapper>
        <LocationWrapper>
          <Card>
            <Name>Pleasant Grove</Name>
            <Address>
              2537 S Buckner Blvd
              <br />
              Dallas, TX 75227
            </Address>
            <Info>
              <H6>Hours</H6>
              <Body1>Thursday-Monday / 11am-8pm</Body1>
            </Info>
            <Info>
              <H6>Phone</H6>
              <Body1 as="a" href="tel:+19728072673">
                (972) 807-2673
              </Body1>
            </Info>
            <DirectionsLink
              as="a"
              href="https://www.google.com/maps/dir//El+Palote+Panaderia,+2537+S+Buckner+Blvd,+Dallas,+TX+75227/@32.7559865,-96.6856557,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x864ea372eceaf3fb:0x776e6e169cac2b33!2m2!1d-96.683467!2d32.755982"
            >
              Get Directions
            </DirectionsLink>
          </Card>
        </LocationWrapper>
      </FeatureRow>
    </div>
  </Layout>
)

type Props = {}

function LocationsPage(props: Props): React.node {
  return locationsPage
}

export default React.memo(LocationsPage)
