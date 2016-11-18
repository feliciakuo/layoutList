const webpack = require('webpack')
const Config = require('webpack-config').Config

module.exports = new Config().extend('./webpack/dll.config.js').merge({
  devtool: null,
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }, comments: false })
  ]
})
