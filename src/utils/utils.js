module.exports = {
    getCurWeekUrlSuffix: function (date = new Date()) {
        function getFullWeekInMonth(n) {
            let curMonthDays = new Date(n.getFullYear(), (n.getMonth() + 1), 0).getDate(),
                weekTemp = [],
                dayTemp = []
            for (let index = 1; index <= curMonthDays; index++) {
                let dateArr = [n.getFullYear(), n.getMonth() + 1, index].join('-')
                // 当天是周几
                let week = new Date(dateArr).getDay()
                // 当天是周一
                if (week == 1 && dayTemp.length == 0) {
                    dayTemp.push(new Date(dateArr) / 1000)
                }
                // 当天是周天
                if (week == 0 && dayTemp.length == 1) {
                    dayTemp.push(new Date(dateArr) / 1000 + 86399)
                    weekTemp.push(dayTemp)
                    dayTemp = []
                }
            }
            // 处理当月最后一周
            let nextDay = weekTemp[weekTemp.length - 1][1],
                lastDay = new Date([n.getFullYear(), (n.getMonth() + 1), curMonthDays].join('-')) / 100

            if (nextDay != lastDay) {
                weekTemp.push([
                    nextDay + 86400,
                    nextDay + 86400 * 7 + 86399
                ])
            }
            return weekTemp
        }
        let curMonthWeeks = getFullWeekInMonth(date)

        let y = -1, m = -1, w = -1
        if ((new Date(date) / 1000) < curMonthWeeks[0][0]) {
            // 当天属于上个月最后一周
            // console.log('当天属于上个月最后一周');
            let LastMonth = null
            if (date.getMonth() == 0) {
                // console.log('当前是1月，需要推到上年12月');

                LastMonth = new Date([date.getFullYear() - 1, 12, 15].join('-'))
            } else {
                LastMonth = new Date([date.getFullYear(), date.getMonth(), 15].join('-'))
            }
            y = LastMonth.getFullYear()
            m = LastMonth.getMonth() + 1
            w = getFullWeekInMonth(LastMonth).length
        } else {
            y = new Date(date).getFullYear()
            m = new Date(date).getMonth() + 1
            curMonthWeeks.forEach((item, index) => {
                let nowStamp = new Date(date) / 1000
                if (nowStamp >= item[0] && nowStamp < item[1]) {
                    w = index + 1
                }
            })
        }
        // 19m9w4
        return y.toString().slice(2, 4) + 'm' + m + 'w' + w;
    }
}