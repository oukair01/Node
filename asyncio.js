var fs = require('fs')
var lines = 0

function count(callback) {
	fs.readFile(process.argv[2], function (error, fileContent) {
	lines = fileContent.toString().split('\n').length - 1
	callback()
	})
}
function show()
{
	console.log(lines)
}
count(show)