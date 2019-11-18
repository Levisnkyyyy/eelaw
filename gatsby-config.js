module.exports = {
  siteMetadata: {
    title: `Erez Eliahu`,
    description: `Law firm based in Israel & Manhattan. Offering commercial, energy and infastructure, real estate and wills & inheritance services.`,
    author: `@eelaw`,
  }, 
  pathPrefix: `/en`,
   /*
  siteMetadata: {
    title: `ארז אליהו`,
    description: `משרד עורכי דין, ארז אליהו ושות' מתעסקים בדיני מסחר, צוואות וירושות, אנרגיה ותשתיות, מקרקעין ונדל"ן. משרדינו מעניק שירותים במספר מדינות`,
    author: `@eelaw`,
  },*/
  
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`, {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/json`,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/erezlogo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/ko` when connecting `/`
        redirect: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-146804018-3",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
