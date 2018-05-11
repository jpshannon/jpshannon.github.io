//import pluralize from 'pluralize';
//var helpers = require('handlebars-helper')();

console.log('hi utilities')

module.exports =  {
	removeSchema: function (url) {
		return url.replace(/^.*:\/\//i, '')
	},
	sanitizeLowercase: function (str) {
		return str.replace(/[^a-z0-9]/gi, '-').toLowerCase()
	},
	times: function (n, block) {
		let accum = ''
		let i = 0

		while (++i <= n) {
			accum += block.fn(i)
		}

		return accum
	},
	lowercase: function(str) {
		return str.toLowerCase();
	}
}