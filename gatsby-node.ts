const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

import path from 'path'
import got from 'got'
import parser from './src/parser'

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

    createPage({
      path: data.link,
      component: path.resolve(`src/templates/index.tsx`),
      context: data
    })
  } catch (error) {
    console.log(error)
  }
}
