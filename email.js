const request = require('request')
const chalk = require('chalk')
/**
 * 发送邮件
 * @param {*} emailAddress 
 * @param {*} commitMessage 
 */
const sendEmail = (emailAddress, commitMessage) => {
  return new Promise((resolve, reject) => {
    request({
      url: "http://msgg.i.qingcdn.com/api/app/1.0/msgg/submitmail",
      method: "POST",
      json: true,
      headers: {
        "content-type": "application/json",
      },
      body: {
        "token": "a11190ca4d746765bfe39c70534ffc8b",
        "params": {
          "address": emailAddress,
          "title": "前端模版更新",
          "content": `您的更新已经同步到前端模版预览页面！提交信息：${commitMessage}`
        }
      }
    }, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        if (body.errno !== 0) {
          reject()
          console.log(chalk.red(`邮件发送失败！失败原因：${body.errmsg}`))
        } else {
          resolve()
          console.log(chalk.green(`邮件发送成功！`))
        }
      } else {
        reject()
        console.log(chalk.red(`邮件发送失败！失败原因：网络请求未发送成功`))
      }
    })
  })
}

module.exports = { sendEmail }