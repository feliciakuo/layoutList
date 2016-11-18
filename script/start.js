process.env.NODE_ENV = 'development'

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('../webpack/development.config')
const DashboardPlugin = require('webpack-dashboard/plugin')

const port = 3100
const compiler = webpack(config)
compiler.apply(new DashboardPlugin())

new WebpackDevServer(compiler, {
  hot: true,
  inline: true,
  publicPath: config.output.publicPath,
  quiet: true,
  historyApiFallback: true,
  watchOptions: {
    ignored: /node_modules/
  },
  proxy: {
    '/api/*': {
      target: 'http://localhost:3000',
      secure: false
    }
  }
}).listen(port)
