const scheduleHandler = require('./js/scheduleHandler')
const sendMail = require("./js/sendMail")

console.log('开始执行任务');

scheduleHandler(function (res) {
    sendMail(res.title, res.content)
})