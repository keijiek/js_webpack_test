const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 設定: sass-loader & css-loader & MiniCssExtractPlugin
const pluginForMiniCssExtract = new MiniCssExtractPlugin({filename: './css/style.css',});
const ruleForSASS = {
  test: /\.s[ac]ss$/i,
  include: path.resolve(__dirname, 'src/sass'),// module.exports に書かれる output.path を起点としたpath
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
    'sass-loader',
  ],
}

// 設定: ts-loader
const ruleForTypeScript = {
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: /node_modules/,
}

// 設定: html-webpack-plugin
const pluginForHtmlWebpack = new HtmlWebpackPlugin({
  template: './src/index.html',// テンプレート
});

// webpack 設定本編
module.exports = {
  // 入力の起点
  entry: {
    'script/bundle': path.resolve(__dirname, 'src', 'script', 'index.ts'),
  },
  // 出力先と出力ファイル名
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },
  module: {
    rules: [
      ruleForSASS,// 下記 plugins array に要: mini-css-extract-plugin
      ruleForTypeScript,// 下記 plugins array に要: html-webpack-plugin
    ],
  },
  plugins: [
    pluginForMiniCssExtract,
    pluginForHtmlWebpack,
  ],
  resolve: {
    extensions: ['.ts', '...'],// ... は '.js', '.json', '.wasm' のデフォルト値を指す
    modules: ['node_modules'],// デフォルト値
  }
}
