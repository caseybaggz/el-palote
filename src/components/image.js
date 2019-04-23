// @flow

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 */

type Props = {
  alt: string,
  title: string,
  file: string,
}

function Image(props: Props): React.Node {
  const data = useStaticQuery(graphql`
    query {
      headerImage: file(relativePath: { eq: "tacos.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img {...props} fluid={data.headerImage.childImageSharp.fluid} />
}

Image.defaultProps = {
  alt: "tacos",
  title: "El Palote tacos",
  file: "tacos",
}

export default React.memo(Image)
