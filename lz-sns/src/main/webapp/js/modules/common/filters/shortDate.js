define(function () {
	return [shortDate];

	function getDateDiff(dateTimeStamp) {
		var minute = 1000 * 60;
		var hour = minute * 60;
		var day = hour * 24;
		var month = day * 30;
		var now = new Date().getTime();
		var diffValue = now - dateTimeStamp;
		var monthC = diffValue / month;
		var weekC = diffValue / (7 * day);
		var dayC = diffValue / day;
		var hourC = diffValue / hour;
		var minC = diffValue / minute;
		var result;
		if (monthC >= 1) {
			result = parseInt(monthC) + "个月前";
		} else if (weekC >= 1) {
			result = parseInt(weekC) + "周前";
		} else if (dayC >= 1) {
			result = parseInt(dayC) + "天前";
		} else if (hourC >= 1) {
			result = parseInt(hourC) + "个小时前";
		} else if (minC >= 1) {
			result = parseInt(minC) + "分钟前";
		} else {
			result = "刚刚";
		}

		return result;
	}

	function shortDate() {
		return function (date) {
			return getDateDiff(date);
		};
	}
});