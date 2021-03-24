const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

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
    let response = await got(`${process.env.MOCK_CONTENT_API_URL}/home`)
    
    let data = JSON.parse(response.body)
    createPage({
      path: data.link,
      component: path.resolve(`src/templates/index.tsx`),
      context: { components: data.content.components }
    })

    // Help page at /home/help
    response = await got(`${process.env.MOCK_CONTENT_API_URL}/home/help`)
    
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
