module.exports = {
  siteMetadata: {
    title: `Emilio Ziniades Portfolio Website`,
    description: `Emilio Ziniades: teaches, writes, codes`,
    author: `Emilio Ziniades`,
    authorEmail: `emilioziniades@gmail.com`,
    blurb:
      "Interdisciplinary research into Political Economy, Cryptocurrencies and Technology. Based in Cape Town, South Africa.",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `react-spacer`,
    `gatsby-plugin-mdx`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
