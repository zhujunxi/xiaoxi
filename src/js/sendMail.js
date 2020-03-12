const nodemailer = require("nodemailer"); //发送邮件的node插件
const config = require('../config.js')

module.exports = function sendMail(subject = '小夕提醒', html) {
    const { EmailFrom, EmailTo } = config.mail

    let transporter = nodemailer.createTransport(config.mail.NodeMailer);

    transporter.sendMail({
        from: EmailFrom,
        to: EmailTo,
        subject: subject, // 邮件主题
        html: html
    }, (error, info = {}) => {
        console.log(subject, "邮件发送成功", info.messageId);
        console.log("静等下一次任务");
    });
}