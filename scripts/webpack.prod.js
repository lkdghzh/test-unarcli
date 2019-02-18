const merge = require('webpack-merge');
const base = require('./webpack.base');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const utils = require('./utils')

const miniCSSPlugin = new MiniCssExtractPlugin({
  filename: 'css/[name].bundle.[hash:6].css'
})

// 根据模板生成入口文件
// 生成jscss资源自动注入
// 模板压缩
const htmlPlugin = new HtmlWebpackPlugin({
  template: 'src/index.html',
  minify: {
    collapseWhitespace: true
  }
})

// 清空dist上次生成js css包
// https://www.npmjs.com/package/clean-webpack-plugin
const cleanPlugin = new CleanWebpackPlugin(['js/*.*', 'css/*.*'], {
  root: utils.resolve('dist')
});

// 打包体积分析插件
const analyzerPlugin = new BundleAnalyzerPlugin()

// minimizer属性，重写了webpack自带的丑化插件，必须要手动new UglifyJsPlugin
const uglifyJsPlugin = new UglifyJsPlugin({
  cache: true,
  parallel: true,
  sourceMap: true // set to true if you want JS source maps
})

//使用css抽离，但是不压缩new OptimizeCSSAssetsPlugin({})
//https://github.com/webpack-contrib/mini-css-extract-plugin/issues/141
const cssOptimizePlugin = new OptimizeCSSAssetsPlugin({
  cssProcessorOptions: {
    map: {
      inline: false //css压缩后，css的sourcemap内联问题，让其单独一个文件存在
    }
  }
})

const prod = {
  //https://www.webpackjs.com/concepts/mode/
  mode: "production",
  //https://www.webpackjs.com/guides/production/#source-map
  devtool: 'source-map',
  output: {
    filename: 'js/[name].bundle.[hash:6].min.js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: /node_modules/,
          chunks: 'initial',
          enforce: true
        }
      }
    },
    runtimeChunk: false,
    //这里写minimizer
    //https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production
    minimizer: [
      uglifyJsPlugin,
      cssOptimizePlugin
    ]
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        include: [utils.resolve('src'), utils.resolve('node_modules/element-ui')],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader',
        ]
      }
    ]
  },
  plugins: [
    htmlPlugin,
    miniCSSPlugin,
    cleanPlugin,
    analyzerPlugin
  ]
}
module.exports = merge(base, prod)
