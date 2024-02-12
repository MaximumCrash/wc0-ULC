const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

function isIndexPage(post) {
  return path.basename(post.node.fileAbsolutePath) === 'index.md'
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    
    resolve(
      // query for markdown files
      graphql(
        `
          {
            allMarkdownRemark {
              edges {
                node {
                  excerpt(format: PLAIN)
                  fileAbsolutePath
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    page_layout {
                      template
                    }
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // create the posts
        const posts = result.data.allMarkdownRemark.edges

        for (post of posts) {
          let postContext = {
            slug: post.node.fields.slug,
          }

          // if it's a post index, add corresponding posts to context
          if (isIndexPage(post)) {
            const parentRelPath = path.dirname(
              path.relative(__dirname, post.node.fileAbsolutePath)
            )
            postContext.children = posts.filter(({ node }) => {
              if (path.basename(node.fileAbsolutePath) === 'index.md') {
                return false
              }
              const childRelPath = path.relative(
                __dirname,
                node.fileAbsolutePath
              )
              return childRelPath.startsWith(parentRelPath)
            })
          }

          //NOTE(Rejon): We use blocks as the "Page" component for this app. 
          createPage({
            path: post.node.fields.slug,
            component: path.resolve('./src/templates/blocks.js'),
            context: postContext,
          })
        }
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /materialize/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}