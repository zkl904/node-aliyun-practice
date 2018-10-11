// var express = require('express')
// // var http = require('http')
// // var fs = require('fs');
//
// // var server = http.createServer();
//
// server.on('request',function(){
//   console.log('收到客户端发出的请求.......');
// });
//
//
// server.on('request',function(request,response){
//   //response.writeHead(响应状态码，响应头对象): 发送一个响应头给请求。
//   response.writeHead(200,{'Content-Type':'text/html'})
//   // 如果url=‘/’ ,读取指定文件下的html文件，渲染到页面。
//   fs.readFile('index.html','utf-8',function(err,data){
//     if(err){
//       throw err ;
//     }
//     response.end(data);
//   })
// })
//
// server.listen(9001, function(){

const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.listen(9001, () => {
  console.log(`App listening at port 9001`)
})
// console.log('服务器正在端口号：9001上运行......');
// })