const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

//extract plugin does not work with hot reload for css therefor it i here in the prod file
const extractPlugin = new ExtractTextPlugin({
  filename: "main.css",
  allChunks: true,
});

module.exports = merge(common, {
  devtool: 'source-map',
  module: {
    rules: [
        {
            test: /\.scss$/,
            use: extractPlugin.extract({
                use: ['css-loader', 'sass-loader']
            })
        },       
    ]
},
  plugins: [
    extractPlugin,
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});