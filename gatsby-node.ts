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
    const response = await got('http://localhost:3301/home')
    let data = JSON.parse(response.body)

    const index = path.resolve(`src/templates/index.tsx`)
    console.log(data);
    createPage({
      path: data.link,
      component: index,
      context: data
    })
  } catch (error) {
    console.log(error.response.body)
  }
}
