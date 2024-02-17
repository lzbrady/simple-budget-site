module.exports = {
  siteMetadata: {
    title: "Simple Budget",
    description:
      "Simple Budget opens up the possibility for financial freedom to everyone. Simplify your budget. Know your spending. Grow your savings.",
    url: "https://www.gosimplebudget.com", // No trailing slash allowed!
    image: "/images/LogoTransparent.png", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/static/images`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /static/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Nunito`, `Open Sans`],
        display: "swap",
      },
    },
  ],
};
