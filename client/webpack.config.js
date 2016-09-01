var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: ['./src/App.js'],
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.js?$/,
        include: __dirname,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};