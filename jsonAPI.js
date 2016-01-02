var http 	= require('http')
var url 	= require('url')
var port 	= process.argv[2]

function retISO(t)	{

	var hr  = t.getHours()
	var min = t.getMinutes()
	var sec = t.getSeconds()

	return { hour: hr, minute: min, second: sec } 
}
function retUnix(t) {

	return { unixtime: t.getTime() }
}

var server  = http.createServer(function (request, response){
	if(request.method != 'GET')
		return response.end()

	var obj = url.parse(request.url, true)
	var dte   = new Date(obj.query.iso)
	if(obj.pathname == '/api/parsetime') {
		var time = retISO(dte);
		response.writeHead(200, { 'Content-Type': 'application/json' })
		response.end(JSON.stringify(time))
	} else if(obj.pathname == '/api/unixtime') {
		var time = retUnix(dte)
		response.writeHead(200, { 'Content-Type': 'application/json' })
		response.end(JSON.stringify(time))	
	} else {
//		res.writeHead(404)
		response.end()
	}
})
server.listen(port)