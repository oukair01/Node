var fs		= require('fs')
var http	= require('http')
var port 	= process.argv[2]
var servee	= process.argv[3]

var server = http.createServer(function (request, response)
{
	var r = fs.createReadStream(servee)
	var w = fs.createWriteStream(servee)
	r.pipe(w)
	r.on('end', function (){
		response.end()
	})
})
server.listen(port)