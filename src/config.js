const pass = require('../pass') // 授权码存放 eg: module.exports = '8888888'

module.exports = {
    mail: {
        //发送者昵称与邮箱地址
        EmailFrom: '"小夕" <xingxiapple@qq.com>',
        //接收者邮箱地
        EmailTo: "xingxiapple@vip.qq.com",
        // NodeMailer 配置
        NodeMailer: {
            host: 'smtp.qq.com',
            secureConnection: true, // use SSL
            port: 465,
            secure: true, // secure:true for port 465, secure:false for port 587
            auth: {
                user: '531578783@qq.com',
                pass // QQ邮箱需要使用授权码，全局变量
            }
        }
    }
}