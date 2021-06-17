module.exports = {
  pathPrefix: "/node-masker",
  plugins: [
    {
      resolve: "smooth-doc",
      options: {
        name: "Node Masker",
        description:
          "Node-masker is a javascript mask library made in TypeScript.",
        siteUrl: "https://example.com",
        githubRepositoryURL: "https://github.com/marcelodosreis/node-masker",
        navItems: [{ title: "Docs", url: "/docs/" }],
      },
    },
  ],
};
