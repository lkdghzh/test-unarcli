const http = require('http')
const express = require('express')
const webpack = require('webpack')
const webpackDevConfig = require('./webpack.dev')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const opn = require('opn')

const app = express()

const hotClient = 'webpack-hot-middleware/client'
const mockAdress = './mock'
webpackDevConfig.entry.app.push(hotClient)
webpackDevConfig.entry.app.push(mockAdress)
const hotServer = new webpack.HotModuleReplacementPlugin()
webpackDevConfig.plugins.push(hotServer)

const compiler = webpack(webpackDevConfig)

// https://webpack.docschina.org/guides/development/#%E4%BD%BF%E7%94%A8-webpack-dev-middleware
// webpack-dev-middleware是一个容器(wrapper)，它可以把 webpack 处理后的文件传递给一个服务器(server)
// 在webpack配置文件内，需要有publicPath，服务器默认从publicPath中取资源,作为基础路径
// 此插件不是自动刷新哦
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackDevConfig.output.publicPath
}))

// https://webpack.docschina.org/guides/hot-module-replacement/
app.use(webpackHotMiddleware(compiler, {
  log: () => { }
}))

const server = http.createServer(app)
let port = 3000

server.listen(port, (e) => {
  if (e) {
    console.log('开发服务器出现错误')
    throw e
  }
  opn(`http://localhost:${port}`)
})

