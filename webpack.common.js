const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Rule: sass-loader css-loader MiniCssExtractPlugin
const ruleForSASS = {
  test: /\.s[ac]ss$/i,
  include: path.resolve(__dirname, 'src/sass'),// module.exports に書かれる output.path を起点としたpath
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
    'sass-loader',
  ],
}

// Rule: ts-loader
const ruleForTypeScript = {
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: /node_modules/,
}

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
      ruleForSASS,
      ruleForTypeScript,
    ],
  },
  plugins: [
    // css ファイルを出力させるプラグイン, 出力する filename は output.path を起点とした path
    new MiniCssExtractPlugin({filename: './css/style.css',}),
  ],
  resolve: {
    extensions: ['.ts', '...'],// ... は '.js', '.json', '.wasm' のデフォルト値を指す
    modules: ['node_modules'],// デフォルト値
  }
}
