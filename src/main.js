const sendMail = require("./js/sendMail")
const generateTemp = require("./js/generateTemp")
const utils = require('./utils/utils')


sendMail(generateTemp({
    link: utils.getUrlDate()
}))