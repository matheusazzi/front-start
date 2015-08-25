module.exports = {
  entry: './app/assets/scripts/app.js',
  output: {
    path: __dirname,
    filename: 'app.js'
  },
  resolve: {
    root: './',
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
