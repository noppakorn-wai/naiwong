const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'production',
  entry: './services/functions.js',
  target: 'node',
  stats: 'errors-only',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new Dotenv(),
  ],
  output: {
    path: path.join(__dirname, '../.build'),
    filename: 'index.js',
    libraryTarget: 'this',
  },
}
