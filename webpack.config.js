module.exports = {
  entry: './app/assets/scripts/app.js',

  output: {
    path: __dirname,
    filename: 'app.js'
  },

  debug: true,

  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        cacheDirectory: true
      }
    }]
  }
};
