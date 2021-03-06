require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
      siteMetadata: {
        // Used for the title template on pages other than the index site
        siteTitle: `<LoicKouam/>`,
        // Default title of the page
        siteTitleAlt: `Loic Kouam `,
        // Can be used for e.g. JSONLD
        siteHeadline: `Hello @Loic Kouam`,
        // Will be used to generate absolute URLs for og:image etc.
        siteUrl: `http://loickouam.com`,
        // Used for SEO
        siteDescription: `Loic Kouam, developpeur fullstack `,
        // Will be set on the <html /> tag
        siteLanguage: `fr`,
        // Used for og:image and must be placed inside the `static` folder
        siteImage: `/banner.jpg`,
        // Twitter Handle
        author: `@loicKouam`,
        // Links displayed in the header on the right side
      },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/loicKouam`,
          },
          {
            name: `github`,
            url: `https://github.com/lookouam`,
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/lo%C3%AFc-kouam-37b36a67/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
