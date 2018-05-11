module.exports = function (testA, testB, options) {
	if (testA || testB) {
		return options.fn(this);
	} else {
		return options.inverse(this);
	}
}