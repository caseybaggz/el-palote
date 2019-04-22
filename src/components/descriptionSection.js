// @flow

import React from "react"
import styled from "styled-components"
import IconLink from './iconLink'
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

const Headline = styled(H3)`
  line-height: 1;
  margin-bottom: 28px;
  max-width: 500px;
  text-transform: uppercase;
`

const SecondaryHealdine = styled(H6)`
  color: ${props => props.theme.secondaryText};
  text-transform: uppercase;
`

const ImgWrapper = styled.div`
  margin-bottom: 40px;
  max-width: 384px;
  width: 100%;

  ${media.tablet} {
    margin-bottom: initial;
  }
`

type Props = {
  children?: React.Node,
  headline: string,
  secondaryHeadline?: string,
  to: string,
}

function DescriptionSection(props: Props): React.Node {
  const { children, secondaryHeadline } = props

  return (
    <Wrapper>
      <Column>
        {secondaryHeadline && <SecondaryHealdine>{secondaryHeadline}</SecondaryHealdine>}
        <Headline>{props.headline}</Headline>
        {children && <Body1>{children}</Body1>}
        <IconLink to={props.to} label="our menu" />
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
