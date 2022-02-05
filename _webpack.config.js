const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => {
  // const is_development = argv.mode === 'development';
  // const is_production = argv.mode ==='production';
  console.log('argv.mode:', argv.mode);
  const MODE = (argv.mode === 'production') ? 'production' : 'development' ;
  console.log(MODE);

  return {
    mode: 'development',
    // mode: 'production',

    entry: {
      //'js/bandle': './src/js/app.js'
      'js/bandle': path.join(__dirname, 'src', 'js', 'app.ts')
    },

    output: {
      path: path.resolve(__dirname, 'public'),
      filename: '[name].js'
    }
  }
}
