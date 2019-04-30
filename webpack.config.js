//const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    carousel: './src/Carousel.js',
    serve: './serve/index.js',
  },
  module: {
    rules: [
      {
        test: /|.js$/,
        loader: require.resolve('babel-loader'),
      },
    ],
  },
};