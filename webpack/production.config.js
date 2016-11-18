const webpack = require('webpack')
const Config = require('webpack-config').Config
const AppcacheWebpackPlugin = require('appcache-webpack-plugin')

module.exports = new Config().extend('./webpack/base.config.js').merge({
  devtool: null,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new AppcacheWebpackPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }, comments: false })
  ]
})
