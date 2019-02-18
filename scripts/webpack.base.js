const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const StyleLintPlugin = require('stylelint-webpack-plugin');
const utils = require('./utils')

module.exports = {
  entry: {
    app: ['./src/index.js']
  },
  output: {
    path: utils.resolve('dist'),
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,//
        loader: 'eslint-loader',
        enforce: "pre",
        include: [utils.resolve('src')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        include: [utils.resolve('src')],
        use: 'babel-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,
              name: '[name].[ext]',
              outputPath: 'assets'
            }
          }
        ]
      },
      {
        test: /\.(eot|otf|woff2?|ttf|)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts'
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue','.less','.css'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    },
  },
  stats: 'none',
  plugins: [
    new VueLoaderPlugin(),
    new StyleLintPlugin({
      files: ['**/*.{vue,htm,html,css,less}'],
    })
  ]
}
