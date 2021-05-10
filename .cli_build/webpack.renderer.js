// Native
const path = require('path')
// Package
const htmlWebpackPlugin = require('html-webpack-plugin')

const WebpackMainConfig = {
  mode: 'development',
  // mode: 'production',
  entry: {
    main: path.resolve(__dirname, '../app/renderer/index.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash].bundle.js',
  },
  // devServer: {
  //   contentBase: path.resolve(__dirname, '../dist'),
  //   compress: true,
  //   port: 8765,
  // },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, '../app/renderer/index.html'),
    }),
  ],
}

module.exports = WebpackMainConfig
