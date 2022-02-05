const { merge } = require('webpack-merge');
const webpackCommonJs = require('./webpack.common.js');

module.exports = merge(webpackCommonJs, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  // recommended: eval, eval-source-map
});