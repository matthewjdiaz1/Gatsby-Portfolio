module.exports = {
  siteMetadata: {
    description: "Personal page of Matthew J Diaz",
    locale: "en",
    title: "Matthew J Diaz",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        // theme: "classic",
        // theme: "dark-pink",
        theme: "bright-red",
        showThemeLogo: false,
        // pathPrefix: "/portfolio",
      },
    },
  ],
}
