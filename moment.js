// Author: Collins Sirmah 

var args = process.argv
var http = require('http')
var url = require('url')

//TODO: Create functions to make the code more modular
var server = http.createServer(function (req, res) {
    if(req.method == 'GET') {

        var data = url.parse(req.url)
        if (data.pathname == '/api/parsetime') {
            //The split should be in a function
            var dateCont = data.query.split('=')
            var date = new Date(dateCont[1])

            //A function of its own too
            var finalDate = {
                "hour": date.getHours(), 
                "minute": date.getMinutes(), 
                "second": date.getSeconds()
                }
        }
        if (data.pathname == '/api/unixtime') {
            var dateCont = data.query.split('=')
            var date = new Date(dateCont[1])

            //A function of its own
            var finalDate = {
                 "unixtime": date.getTime()
                 }
        }
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(finalDate))
    }
 })

server.listen(args[2])