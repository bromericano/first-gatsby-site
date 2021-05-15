module.exports = {
  siteMetadata: {
    title: "First Site",
  },
  plugins: ["gatsby-plugin-gatsby-cloud",
            {
              resolve: 'gatsby-plugin-typography',
              options: {
                pathToConfigModule: 'src/utils/typography',
            },
            },
          ],
};
