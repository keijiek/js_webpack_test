const path = require('path');
const { merge } = require('webpack-merge');
const webpackCommonJs = require('./webpack.common.js');

// web-dev-server の設定
const devServer = {
  static: {
    directory: path.resolve(__dirname, 'public'),
  },
  compress: true,
  port: 9000,
  open: true,
}

// 設定本編, 開発用
module.exports = merge(webpackCommonJs, {
  mode: 'development',
  // watch: true,
  devtool: 'eval-cheap-module-source-map',// recommended: eval, eval-source-map
  devServer: devServer,
});