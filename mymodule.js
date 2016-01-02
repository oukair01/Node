var fs = require ('fs')
var path = require ('path')
var content = []

module.exports = function read(dir, ext, callback) {
	fs.readdir(dir, function (err, list) {
		if (err)
			return callback(err)

		var len = list.length
		for(var i=0; i<len; i++) {
			if (path.extname(list[i]) == '.' + ext)
				content.push(list[i])
		}
		callback (null, content)		
	})
}