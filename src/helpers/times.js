module.exports = function (n, block) {
	let accum = ''
	let i = 0

	while (++i <= n) {
		accum += block.fn(i)
	}

	return accum
}