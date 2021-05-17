module.exports = {
  siteMetadata: {
    title: "First Site",
  },
  plugins: ["gatsby-plugin-gatsby-cloud",
            'gatsby-plugin-postcss',
            {
              resolve: 'gatsby-source-fileSystem',
              options: {
                name: 'src',
                path: `${__dirname}/src/`,
              },
            },
            'gatsby-transformer-remark',
          ],
};
