module.exports = {
  pathPrefix: `/Portfolio`,

  siteMetadata: {
    title: `Om Sanjay Gunjal Portfolio`,
    description: `Personal portfolio of Om Sanjay Gunjal — Robotics & AI Engineer.`,
    author: `Om Sanjay Gunjal`,
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
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
        name: `Om Sanjay Gunjal Portfolio`,
        short_name: `Om Gunjal`,
        start_url: `/`,
        background_color: `#0b0c10`,
        theme_color: `#0b0c10`,
        display: `minimal-ui`,
        icon: `./src/images/OMpfp.jpeg`, // Updated to Om's existing profile photo
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: process.env.GATSBY_GA_MEASUREMENT_ID || `GA-DEFAULT`,
        head: false,
        anonymize: true,
      },
    },
  ],
}