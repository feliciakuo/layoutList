const path = require('path')
const webpack = require('webpack')
const Config = require('webpack-config').Config

const vendors = [
  'ansi-regex',
  'babel-polyfill',
  'babel-runtime/core-js',
  'bluebird',
  'core-js',
  'debug',
  'error-stack-parser',
  'fbjs',
  'form-data',
  'global',
  'history',
  'is-promise',
  'json-stringify-safe',
  'lodash',
  'lodash/cloneDeep',
  'lodash/filter',
  'lodash/get',
  'lodash/set',
  'lodash/sumBy',
  'lodash/isEqual',
  'lodash/merge',
  'lodash/debounce',
  'lodash/intersection',
  'lodash/sortBy',
  'lodash/find',
  'lodash/omit',
  'ms',
  'object-assign',
  'query-string',
  'querystring',
  'react',
  'react-deep-force-update',
  'react-dom',
  'react-proxy',
  'react-redux',
  'react-router',
  'react-transform-catch-errors',
  'react-transform-hmr',
  'redbox-react',
  'redux',
  'stackframe',
  'strip-ansi',
  'i18next',
  'i18next-xhr-backend',
  'react-i18next',
  'whatwg-fetch'
]

module.exports = new Config().merge({
  devtool: 'eval-cheap-module-source-map',
  output: {
    path: './src/dlls',
    filename: '[name].js',
    library: '[name]'
  },
  entry: {
    dll: vendors
  },
  plugins: [
    new webpack.DllPlugin({
      path: './src/dlls/[name].manifest.json',
      name: '[name]',
      context: path.join(__dirname, '..', 'src', 'dlls')
    })
  ]
})
