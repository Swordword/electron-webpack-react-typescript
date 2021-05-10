// Native
const path = require('path')
// Package
const htmlWebpackPlugin = require('html-webpack-plugin')

const WebpackMainConfig = {
  mode: 'development',
  // mode: 'production',
  entry: {
    main: path.resolve(process.cwd(), 'app/renderer/index.js'),
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[hash:name].js',
  },
  devServer: {
    contentBase: path.resolve(process.cwd(), 'dist'),
    compress: true,
    port: 8765,
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'app/renderer/index.html'),
    }),
  ],
}

module.exports = WebpackMainConfig
