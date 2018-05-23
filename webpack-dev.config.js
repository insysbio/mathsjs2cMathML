'use strict';
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './src/browserEntry',
  mode: 'production',
  output: {
    path: __dirname+'/demo',
    filename: 'mathjs.toCMathML.min.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
