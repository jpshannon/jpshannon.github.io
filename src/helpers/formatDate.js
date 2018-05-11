import moment from 'moment';

module.exports = function (date) {
	if (typeof date === 'undefined') {
		return 'now'
	}
	return moment(date).format('MMM YYYY')
}