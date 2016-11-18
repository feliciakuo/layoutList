const Config = require('webpack-config').Config
const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const PathRewriterPlugin = require('webpack-path-rewriter')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const sprites = require('postcss-sprites')
const lost = require('lost')
const precss = require('precss')
const writeSvg = require('postcss-write-svg')()
const HappyPack = require('happypack')
const git = require('git-rev-sync')

const isDevelopment = process.env.NODE_ENV === 'development'
const happyThreadPool = HappyPack.ThreadPool({ size: 4 })

const opts = {
  baseUrl: path.join(__dirname, '..', 'src'),
  build: path.join(__dirname, '..', 'build'),
  bundle: isDevelopment ? '[name]-dev.js' : '[name]-[hash:7].js',
  css: isDevelopment ? '[name]-dev.css' : '[name]-[hash:7].css',
  assets: isDevelopment ? '[path][name]-dev.[ext]' : '[path][name]-[hash:7].[ext]',
  md: '[path][name].html'
}

const spritesOpts = {
  stylesheetPath: './src/',
  spritePath: './src/img/sprites-build',
  filterBy(image) {
    return image.url.indexOf('sprites') === -1 ? Promise.reject() : Promise.resolve()
  },
  groupBy: []
}

const spritesGroups = [
  'logo'
]

spritesGroups.forEach((val) => {
  spritesOpts.groupBy.push(
    (image) => {
      if (image.url.indexOf(val) === -1) {
        return Promise.reject()
      }

      return Promise.resolve(val)
    }
  )
})

module.exports = new Config().merge({
  context: opts.baseUrl,
  cache: true,
  entry: {
    app: [ 'babel-polyfill', 'index.js' ]
  },
  output: {
    path: opts.build,
    publicPath: '',
    filename: opts.bundle
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'happypack/loader?id=babel',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css?sourceMap&camelCase&modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss')
      },
      { test: /img\/.*\.(png|jpg|jpeg|gif|svg)(\?[a-z0-9-]+)?$/, loader: `file?name=${opts.assets}` },
      { test: /font\/.*\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9-]+)?$/, loader: `file?name=${opts.assets}` },
      { test: /\.jade$/, loader: 'jade' },
      { test: /\.md/, loader: 'happypack/loader?id=md' }
    ],
    noParse: /\.min\.js/
  },
  'markdown-it': {
    html: true,
    typographer: true
  },
  postcss() { return [ autoprefixer, sprites(spritesOpts), lost, precss, writeSvg ] },
  resolve: {
    root: [ opts.baseUrl ],
    modulesDirectories: [ 'node_modules' ],
    extensions: [ '', '.js' ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new CleanWebpackPlugin([ 'build/*', '.happypack/*' ], { root: path.join(__dirname, '..') }),
    new CaseSensitivePathsPlugin(),
    new CopyWebpackPlugin([ { from: path.join(__dirname, '..', 'static'), to: opts.build } ], { ignore: [ { glob: '.*' } ] }),
    new ExtractTextPlugin(opts.css, { allChunks: true }),
    new PathRewriterPlugin({ emitStats: false }),
    new webpack.DllReferencePlugin({
      context: opts.baseUrl,
      manifest: require('../src/dlls/dll.manifest.json')
    }),
    new AddAssetHtmlPlugin({
      filepath: require.resolve('../src/dlls/dll.js'),
      includeSourcemap: false,
      hash: true
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './template/index.jade',
      git: git.short(),
      rev: (new Date()).toISOString()
    }),
    new HappyPack({
      id: 'babel',
      loaders: [ 'babel?cacheDirectory=true' ],
      threadPool: happyThreadPool,
      verbose: false
    }),
    new HappyPack({
      id: 'md',
      loaders: [ `file?name=${opts.md}!html-minify!markdown-it` ],
      threadPool: happyThreadPool,
      verbose: false
    })
  ]
})
