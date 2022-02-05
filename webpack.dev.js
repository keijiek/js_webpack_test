const path = require('path');
const { merge } = require('webpack-merge');
const webpackCommonJs = require('./webpack.common.js');

module.exports = merge(webpackCommonJs, {
  mode: 'development',
  // watch: true,
  devtool: 'eval-cheap-module-source-map',// recommended: eval, eval-source-map
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
    open: true,
  },
});