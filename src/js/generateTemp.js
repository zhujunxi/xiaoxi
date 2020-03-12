const ejs = require("ejs");
const fs = require("fs");
const path = require("path");

/* 
* 每日晨间提醒
* 当周OKR链接按钮
*/

module.exports = {
    morningDaily: function (params) {
        const template = ejs.compile(
            fs.readFileSync(path.resolve(__dirname, "../template/morningDaily.ejs"), "utf-8")
        );
        const html = template(params)
        return html
    },
    eveningDaily: function (params) {
        const template = ejs.compile(
            fs.readFileSync(path.resolve(__dirname, "../template/eveningDaily.ejs"), "utf-8")
        );
        const html = template(params)
        return html
    },
    weekend: function (params) {
        const template = ejs.compile(
            fs.readFileSync(path.resolve(__dirname, "../template/weekend.ejs"), "utf-8")
        );
        const html = template(params)
        return html
    }
}