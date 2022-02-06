const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// a Rule for translation from SASS to CSS
const ruleForSASS = {
  test: /\.s[ac]ss$/i,
  include: path.resolve(__dirname, 'src/sass'),// output.path を起点としたpath
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
    'sass-loader',
  ],
}

// a Rule for translation from TypeScript to JS
const ruleForTypeScript = {
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: /node_modules/,
}

// webpack 設定本編
module.exports = {
  // 入力の起点
  entry: {
    'js/bundle': path.resolve(__dirname, 'src', 'ts', 'app.ts'),
  },
  // 出力するバンドルjs
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
