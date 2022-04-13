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
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `styled-components`,
    `github-slugger`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [`gatsby-remark-autolink-headers`],
      },
    },
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
        name: `emilio.co.za`,
        short_name: `emilio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
}
