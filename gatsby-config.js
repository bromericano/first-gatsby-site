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
            {
              resolve: 'gatsby-source-filesystem',
              options: {
                name: 'src',
                path: `${__dirname}/src/`,
              },
            },
            'gatsby-transformer-remark',
          ],
};
