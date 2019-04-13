// @flow

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

type Props = {
  src: string
}

function Image(prop: Props): React.Node {
  // return (
  //   <StaticQuery
  //     query={graphql`
  //       query {
  //         placeholderImage: file(
  //           relativePath: { eq: "logo.svg" }
  //         ) {
  //           childImageSharp {
  //             fluid(maxWidth: 300) {
  //               ...GatsbyImageSharpFluid
  //             }
  //           }
  //         }
  //       }
  //     `}
  //     render={data => (
  //       <Img fluid={data.placeholderImage.childImageSharp.fluid} />
  //     )}
  //   />
  // )

  return null;
}

export default React.memo(Image)
