import Mock from 'mockjs'
import user from './data/user'

// 拦截那些 URL 与此正则表达式匹配的 XHR 请求，并返回相应的模拟数据
Mock.mock(/user/, user)
