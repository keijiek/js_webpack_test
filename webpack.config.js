const path = require('path');

module.exports = (env, argv) => {
  return {
    //mode: 'development',
    mode: 'production',
    entry: './src/js/app.js',
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'js/bundle.js'
    }
  }
}