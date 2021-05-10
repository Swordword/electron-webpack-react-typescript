// Native
const path = require('path')
// Package
const htmlWebpackPlugin = require('html-webpack-plugin')

const WebpackRendererConfig = {
  mode: 'development',
  // mode: 'production',
  entry: {
    main: path.resolve(__dirname, '../app/renderer/index.tsx'),
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash].bundle.js',
  },

  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, '../app/renderer/index.html'),
    }),
  ],
  resolve: {
    // alias: {
    //   '@': path.resolve(__dirname, '../src/renderer/'),
    // },
    extensions: ['.ts', '.tsx', '.js'],
  },
}

module.exports = WebpackRendererConfig
