var url = process.argv[2]
var http = require('http')

http.get(url, function callback (response){ 
	response.setEncoding('utf8')
	response.on('error', function (e) {
		console.log('Recheck error: ' + e.message)
	})
	response.on('data', console.log)
})