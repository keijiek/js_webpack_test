const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

// エントリーポイント, ts にするかもしれないので、書き直しやすいよう外側に出しておく
const ENTRY_POINT_PATH = path.resolve(__dirname, 'src', 'js', 'app.js');

module.exports = {
  entry: {
    'js/bundle': ENTRY_POINT_PATH,
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },
  module: {
    rules: [
      // a Rule for translation from SASS to CSS
      {
        test: /\.s[ac]ss$/i,
        include: path.resolve(__dirname, 'src/sass'),
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      }
    ],
  },
  plugins: [
    // css ファイルを出力させるプラグイン, 出力する filename は output.path を起点とした path
    new MiniCssExtractPlugin({filename: './css/style.css',}),
  ],
}
