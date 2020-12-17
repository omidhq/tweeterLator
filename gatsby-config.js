/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: '/tweeterlator',
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ['IBM Plex Mono'],
        display: 'swap',
      },
    },
  ],
}
