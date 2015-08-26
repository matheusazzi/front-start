var path = require('path');

module.exports = {
  entry: './app/assets/scripts/app.js',
  output: {
    path: __dirname,
    filename: 'app.js'
  },
  resolve: {
    root: path.resolve('./'),
    alias: {
      vendor: 'app/assets/vendor'
    }
  },
  debug: true,
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};
