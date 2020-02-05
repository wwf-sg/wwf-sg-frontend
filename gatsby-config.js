module.exports = {
  siteMetadata: {
    title: `WWF Singapore`,
    description: `description`,
    author: `WWF SG Webmaster`,
    wordPressUrl: `https://dev-wwfsg.pantheonsite.io`,
  },
  plugins: [
    // Setup WPGraphQL.com to be the source
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        // This type will contain remote schema Query type
        typeName: `WPGraphQL`,
        // This is field under which it's accessible
        fieldName: `wpgraphql`,
        // Url to query from
        url: `https://dev-wwfsg.pantheonsite.io/graphql`,
      },
    },
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
        name: `gatsby-wpgraphql-starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#f0f2f5`,
        theme_color: `#001529`,
        display: `minimal-ui`,
        icon: `src/images/wwf-icon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
  ],
}
