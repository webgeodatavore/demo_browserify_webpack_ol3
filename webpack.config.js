// webpack.config.js
module.exports = {
  module: {
    loaders: [{
      test: require.resolve('openlayers'),
      loader: 'imports?define=>false'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
};
