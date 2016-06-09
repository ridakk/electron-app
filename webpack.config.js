var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './entry.js',

  output: {
    filename: 'bundle.js',
    path: __dirname + '/build',
    publicPath: 'http://localhost:8080/build/'
  },

  module: {
    loaders: [
      { test: /(\.jsx|\.js)$/, loader: "eslint-loader", exclude: /node_modules/ },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' }
    ]
  }
};
