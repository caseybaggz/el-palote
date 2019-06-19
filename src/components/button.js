// @flow

import styled from "styled-components"
import media from "../theme/media"

// THEMES (kind):

// default
// rounded
// accent-rounded
// secondary
// secondary-light
// secondary-dark
// success
// danger
// disabled
// text
// text-danger

function getBackground(props): string {
  const { theme } = props

  switch (props.kind) {
    case "secondary":
    case "text":
    case "text-danger":
      return "transparent"

    case "secondary-light":
      return theme.pureWhite

    case "secondary-dark":
      return theme.primaryLight

    case "success":
      return theme.success

    case "danger":
      return theme.danger

    case "accent-rounded":
      return theme.accent1

    case "disabled":
      return theme.disabledButton

    default:
      return theme.primary
  }
}

function getBorder(props): string {
  const { theme } = props

  if (props.kind === "secondary") {
    return `1px solid ${theme.primary}`
  }

  return "initial"
}

function getBoxShadow(props): string {
  // const { theme } = props

  if (props.kind === "secondary-light") {
    // return theme.shadow
  }

  return "initial"
}

function getColor(props): string {
  const { theme } = props

  switch (props.kind) {
    case "secondary":
    case "secondary-light":
    case "secondary-dark":
    case "text":
      return theme.primary

    case "text-danger":
      return theme.danger

    case "disabled":
      return theme.lightGrey

    default:
      return theme.lightText
  }
}

function getLetterSpacing(props): string {
  if (props.kind === "text") {
    return "0.4px"
  }

  return "1.4px"
}

function getTextTransformation(props): string {
  if (props.kind === "text" || props.kind === "text-danger") {
    return "initial"
  }

  return "uppercase"
}

function getTransition(props): string {
  const transform: string = "transform 150ms ease-out"

  switch (props.kind) {
    case "secondary":
      return `color 150ms ease-out, background 250ms ease-out, ${transform}`

    case "secondary-light":
      return `${transform}, box-shadow 250ms ease-out`

    case "text":
    case "text-danger":
      return "color 250ms ease-out"

    case "success":
    case "danger":
    case "accent-rounded":
      return transform

    default:
      return `background 200ms ease-out, ${transform}`
  }
}

function getHoverBackground(props): string {
  const { theme } = props

  switch (props.kind) {
    case "secondary":
      return theme.primary

    case "text":
    case "text-danger":
      return "transparent"

    case "secondary-light":
      return theme.pureWhite

    // case "secondary-dark":
    //   return theme.primaryLight

    case "disabled":
      return theme.disabledButton

    case "success":
      return theme.success

    case "danger":
      return theme.danger

    case "accent-rounded":
      return theme.accent1

    default:
      return theme.primaryDark
  }
}

function getHoverBoxShadow(props): string {
  if (props.kind === "secondary-light") {
    return "0 6px 19px rgba(52, 52, 53, 0.21)"
  }

  return "initial"
}

function getHoverColor(props): string {
  const { theme } = props

  switch (props.kind) {
    case "secondary-light":
    case "secondary-dark":
      return theme.primary

    case "text":
      return theme.accent3

    case "text-danger":
      return theme.darkText

    case "disabled":
      return theme.lightGrey

    default:
      return theme.lightText
  }
}

function getHoverTransform(props): string {
  switch (props.kind) {
    case "text":
    case "text-danger":
    case "disabled":
    case "success":
      return "initial"

    default:
      return "scale(1.05)"
  }
}

const Button = styled.button`
  appearance: none;
  background: ${props => getBackground(props)};
  border: ${props => getBorder(props)};
  box-shadow: ${props => getBoxShadow(props)};
  color: ${props => getColor(props)};
  cursor: ${props => (props.kind === "disabled" ? "default" : "pointer")};
  display: block;
  font-family: ${props => props.theme.headlineFont};
  font-size: 24px;
  font-weight: 900;
  letter-spacing: ${props => getLetterSpacing(props)};
  padding: 16px 36px;
  text-align: center;
  text-decoration: none;
  text-transform: ${props => getTextTransformation(props)};
  transition: ${props => getTransition(props)};
  width: 100%;

  &:hover {
    background: ${props => getHoverBackground(props)};
    box-shadow: ${props => getHoverBoxShadow(props)};
    color: ${props => getHoverColor(props)};
    transform: ${props => getHoverTransform(props)};
  }

  &:active {
    border: none;
    outline: none;
  }

  &:focus {
    transform: ${props => getHoverTransform(props)};
    outline: none;
  }

  &:focus[disabled] {
    transform: initial;
    outline: none;
  }

  ${media.tablet} {
    width: initial;
  }
`

Button.defaultProps = {
  kind: "default",
  withform: "false",
}

export default Button
