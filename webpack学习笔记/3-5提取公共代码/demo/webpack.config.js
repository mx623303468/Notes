// import webpack from 'webpack'
// import path from 'path'

const webpack = require('webpack')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    'pageA': './src/pageA.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js'
  },
  plugins: [],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: "initial",
          name: 'common',
          minChunks: 2
        }
      }
    }
  }
}
