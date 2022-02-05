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
}
