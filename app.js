// 使用koa2进行加载静态资源 使用这个
const Koa = require('koa')
const path = require('path')
const static = require('koa-static')
const app = new Koa()

//设置静态资源的路径
const staticPath = './public'

app.use(static(
  path.join( __dirname,  staticPath)
))

app.use( async ( ctx ) => {
  ctx.body = 'hello world'
})

app.listen(9001, () => {
  console.log('server is starting at port 9001')
})


// 使用express加载静态资源
/*const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.listen(9001, () => {
  console.log(`App listening at port 9001`)
})*/
