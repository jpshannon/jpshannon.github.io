import moment from 'moment';

module.exports = function (date) {
	return moment(date, 'YYYY-MM-DD').fromNow()
}