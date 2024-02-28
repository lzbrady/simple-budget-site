const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  // const fileNode = getNode(node.parent);

  if (node.internal.type === `MarkdownRemark` || node.internal.type === `Mdx`) {
    // const parsedFilePath = path.parse(fileNode.relativePath);

    // let slug;
    // if (node.frontmatter && node.frontmatter.slug) {
    //   slug = `/${node.frontmatter.slug}`;
    // } else {
    //   if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
    //     slug = `/${parsedFilePath.dir}/${parsedFilePath.name}`;
    //   } else if (parsedFilePath.dir === "") {
    //     slug = `/${parsedFilePath.name}`;
    //   } else {
    //     slug = `/${parsedFilePath.dir}`;
    //   }
    // }

    const value = createFilePath({ node, getNode, basePath: "content/blog" });
    createNodeField({
      name: `slug`,
      node,
      value: `/blog/${value}`,
    });
  }
};
