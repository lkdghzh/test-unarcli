const merge = require('webpack-merge')
const common = require('./webpack.base')
const utils = require('./utils')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebpackPlugin({
  template: 'src/index.html',
})
const dev = {
  //https://www.webpackjs.com/concepts/mode/
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: 'js/[name].bundle.[hash:6].js',
  },
  stats: 'none',
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [utils.resolve('src'), utils.resolve('node_modules/element-ui')],
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader',
        ]
      }]
  },
  plugins: [
    htmlPlugin
  ]
}

module.exports = merge(common, dev)
