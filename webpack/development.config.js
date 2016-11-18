const webpack = require('webpack')
const Config = require('webpack-config').Config
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = new Config().extend('./webpack/base.config.js').merge({
  entry: {
    app: [ require.resolve('webpack-dev-server/client') + '?/', require.resolve('webpack/hot/dev-server') ]
  },
  devtool: 'eval-cheap-module-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'dev.html',
      template: './template/dev.jade',
      inject: false
    }),
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 4000,
        proxy: {
          target: 'http://localhost:3100/',
          ws: true
        },
        logPrefix: 'Laima',
        plugins: [
          {
            module: 'bs-html-injector',
            options: {
              files: [ 'src/**/*.jade' ]
            }
          }
        ]
      }
    )
  ]
})
