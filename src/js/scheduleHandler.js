const schedule = require('node-schedule');
const utils = require('../utils/utils')
const generateTemp = require("./generateTemp")

var rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [0, new schedule.Range(0, 6)];
rule.hour = 10;
rule.minute = 36;
/**
 * 规则
 * 1：每天上午8点，发送今日提醒
 * 2：每天下午10点，发送今日总结
 * 3：每周五/周日下午6点，发送上周概览与下周提醒
 */
module.exports = function scheduleHandler(callback) {
    // 早间提醒
    schedule.scheduleJob('00 00 08 * * 1-5', function () {
        callback({
            title: '早间提醒',
            content: generateTemp.morningDaily({
                link: utils.getCurWeekUrlSuffix()
            })
        })
    })
    // 晚间回顾
    schedule.scheduleJob('00 00 22 * * 1-5', function () {
        callback({
            title: '晚间回顾',
            content: generateTemp.eveningDaily({
                link: utils.getCurWeekUrlSuffix()
            })
        })
    })
    // 本周回顾
    schedule.scheduleJob('00 00 18 * * 0,5', function () {
        callback({
            title: '本周回顾',
            content: generateTemp.weekend({
                link: utils.getCurWeekUrlSuffix()
            })
        })
    })
}