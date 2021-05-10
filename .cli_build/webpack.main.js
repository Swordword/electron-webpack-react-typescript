// Native
const path = require('path')
// Package
// const webpack = require('webpack')
// const htmlWebpackPlugin = require('html-webpack-plugin')

const WebpackMainConfig = {
  mode: 'development',
  // mode: 'production',
  entry: {
    main: path.resolve(process.cwd(), 'app/main/index.js'),
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'main.js',
  },
  target: 'electron-main',
}

module.exports = WebpackMainConfig