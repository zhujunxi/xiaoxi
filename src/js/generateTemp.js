const ejs = require("ejs");
const fs = require("fs");
const path = require("path");

/* 
* 每日晨间提醒
* 当周OKR链接按钮
*/

module.exports = function generateHtml(htmlData) {
    const template = ejs.compile(
        fs.readFileSync(path.resolve(__dirname, "../template/morningDaily.ejs"), "utf-8")
    );
    const html = template(htmlData)

    return html
}