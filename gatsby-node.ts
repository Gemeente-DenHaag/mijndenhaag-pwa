const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

import path from 'path'
import got from 'got'

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()]
    }
  })
}

exports.createPages = async ({ actions, reporter }) => {
  const { createPage } = actions

  try {
    // Home page at /home
    let response = await got('http://localhost:3301/home')
    
    let data = JSON.parse(response.body)

    createPage({
      path: data.link,
      component: path.resolve(`src/templates/index.tsx`),
      context: { components: data.content.components }
    })

    // Help page at /home/help
    response = await got('http://localhost:3301/home/help')
    
    data = JSON.parse(response.body)

    createPage({
      path: data.link,
      component: path.resolve(`src/templates/index.tsx`),
      context: { components: data.content }
    })
  } catch (error) {
    console.log(error)
  }

}
