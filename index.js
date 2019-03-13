const express = require('express')
// const chalk = require('chalk')

const app = express()
app.configure(function () {
  app.use(express.bodyParser())
})

//设置跨域访问
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/jsoncharset=utf-8")
  next()
})

//处理POST请求  
app.post('/hook', function (req, res) {
  console.log(req.body)

  // move(curYear,weekOfYear,req.body).then(_ => {
  //   res.send('ok')
  // })
})

app.get('/demo', function (req, res) {
  res.send('ok')
})

app.listen(1995)
console.log('Listening on port 1995') 