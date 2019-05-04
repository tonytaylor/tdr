const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    carousel: './src/Carousel.js',
    serve: './serve/index.js',
  },
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /|.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          options: {
            presets: ['@babel/preset-env'],
          },
          loader: 'babel-loader',
        },
      },
    ],
  },
};