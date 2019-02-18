const webpack = require('webpack')
const chalk = require('chalk')
const webpackProdConfig = require('./webpack.prod')

webpack(webpackProdConfig, function (err, stats) {
  if (err || stats.hasErrors()) {
    // 在这里处理错误
    throw err
  }
  // 处理完成
  console.log(chalk.green(`😋  项目在${process.env.NODE_ENV}环境，编译成功 `))
})