
module.exports =  function (url) {
	return url.replace(/^.*:\/\//i, '')
}