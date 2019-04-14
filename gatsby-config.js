module.exports = {
  siteMetadata: {
    title: `El Palote Foods`,
    description: `The official site for the first authentic vegan mexican food family-owned restaurant in the world, based out of Dallas, Texas.`,
    author: `@elpalote`,
    avatar: "",
  },
  plugins: [
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-offline",
    `gatsby-plugin-flow`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `El Palote`,
        short_name: `el palote`,
        start_url: `/`,
        background_color: `#1C1714`,
        theme_color: `#1C1714`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            subsets: [`latin`],
            variants: [`900`],
          },
          {
            family: `Raleway`,
            variants: [`400`],
          },
        ],
      },
    },
  ],
}
