const path = require('path')

module.exports = {
  entry: {
    index: './app.js'
  },
  output: {
    path: path.resolve(__dirname, '/'),
    filename: '[name].bundle.[hash:5].js'
  }
}