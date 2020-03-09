const nodemailer = require("nodemailer"); //发送邮件的node插件
const config = {
    //发送者昵称与邮箱地址
    EmailFrom: '"小夕" <xingxiapple@qq.com>',
    //接收者邮箱地
    EmailTo: "xingxiapple@vip.qq.com",
    //邮件主题
    EmailSubject: "第一封测试回应",
}
module.exports = function sendMail(html) {
    const { EmailFrom, EmailTo, EmailSubject } = config

    let transporter = nodemailer.createTransport({
        host: 'smtp.qq.com',
        secureConnection: true, // use SSL
        port: 465,
        secure: true, // secure:true for port 465, secure:false for port 587
        auth: {
            user: '531578783@qq.com',
            pass: 'eytmeuzpfrmabghe' // QQ邮箱需要使用授权码
        }
    });

    let mailOptions = {
        from: EmailFrom,
        to: EmailTo,
        subject: EmailSubject,
        html: html
    };
    transporter.sendMail(mailOptions, (error, info = {}) => {
        console.log(error);

        // if (error) {
        //     sendMail(html); //再次发送
        // }
        console.log("邮件发送成功", info.messageId);
        console.log("静等下一次发送");
    });
}