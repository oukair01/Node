var strftime = require('strftime')
var net 	 = require('net')
var port	 = process.argv[2]

/* DONT REALLY NEED THIS
function retDate(){

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

	return year + "-" + month + "-" + day + " " + hour + ":" + min;
} */

var server 	 = net.createServer(function (socket){
	socket.write(strftime('%F %R', new Date())+'\n');
	socket.end()
})
server.listen(port)