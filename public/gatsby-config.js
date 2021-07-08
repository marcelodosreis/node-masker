module.exports = {
  siteMetadata: {
    title: 'Node Masker',
    description:  "Node-masker is a javascript mask library made in TypeScript.",
    author: 'Marcelo dos Reis',
    keywords: 'react mask, node mask, react masker, react, mask, javascript mask, jsmask',
    siteUrl: "https://nodemasker.com"
  },
  pathPrefix: "/node-masker",
  plugins: [
    {
      resolve: "smooth-doc",
      options: {
        name: "Node Masker",
        description:
          "Node-masker is a javascript mask library made in TypeScript.",
        siteUrl: "https://nodemasker.com",
        githubRepositoryURL: "https://github.com/marcelodosreis/node-masker",
        navItems: [{ title: "Docs", url: "/docs/" }],
      },
    },
  ],
};
