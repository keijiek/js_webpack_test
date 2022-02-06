const { merge } = require('webpack-merge');
const webpackCommonJs = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');

// TerserPlugin の設定, 
const terserPlugin = new TerserPlugin({
  extractComments: false,// ライセンスやヘルプなどのテキストファイルが生成されることを防ぐ
  terserOptions: {
    compress: {
      drop_console: true,// console.logを消す
    },
  },
});

// 製品版を出力する設定
module.exports = merge(webpackCommonJs, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [terserPlugin],
  },

});