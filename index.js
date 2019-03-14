const express = require('express')
const child_process = require('child_process')
const {sendEmail}=require('./email')

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
  const {repository:{
    full_name,name,
    commits:{message,author:{email}}
  }}=req.body

  const repoUrl = `git@github.com:${full_name}.git`

  const subProcess = child_process.exec(`./build.sh ${repoUrl} ${name}`, (err, stdout) => {
    if (err) {
      console.error(err)
    } else {
      console.log(stdout)
      sendEmail(email,message)
      subProcess.kill()
    }
  })
})

app.listen(1995)
console.log('Listening on port 1995') 