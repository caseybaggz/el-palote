// @flow

/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

type Props = {
  description: string,
  lang: string,
  meta: [string],
  keywords: string,
  title: string,
}

function SEO(props: Props): React.ReactNode {
  const { description, lang, meta, keywords, title } = props
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            avatar
          }
        }
      }
    `
  )
  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: site.siteMetadata.avatar,
        },
        {
          property: `og:image:type`,
          content: "image/jpeg",
        },
        {
          property: `og:image:width`,
          content: "600",
        },
        {
          property: `og:image:height`,
          content: "400",
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
              name: `keywords`,
              content: keywords.join(`, `),
            }
            : []
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  keywords: [
    "El Palote",
    "vegan",
    "food",
    "vegan food",
    "dallas",
    "dallas vegan",
    "mexican",
    "mexican food",
    "vegan mexican food",
    "dallas mexican food",
    "family owned",
    "vegan meats",
    "meats",
    "texas vegan",
    "texas",
    "good food",
  ],
  meta: [],
  title: "El Palote Foods",
}

export default React.memo(SEO)
