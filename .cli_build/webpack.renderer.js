// Native
const path = require('path');
// Package
const HtmlWebpackPlugin = require('html-webpack-plugin');

const WebpackRendererConfig = {
  entry: {
    main: path.resolve(__dirname, '../app/renderer/index.tsx'),
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.less$/i,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash].bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../app/renderer/index.html'),
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../app/renderer/'),
    },
    extensions: ['.ts', '.tsx', '.js'],
  },
  target: 'electron-renderer',
};

module.exports = WebpackRendererConfig;
