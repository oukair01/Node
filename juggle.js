var http = require('http')
var bl 	 = require('bl')
var content = []
var count = 0


function show() 
{
	for(var i=0; i<3; i++)
		console.log(content[i])
}

function getHttp(i)
{
	http.get(process.argv[i+2], function (response)
	{
		response.pipe(bl(function (error, data){
			if(error)
				console.error(error)

			content[i] = data.toString()
			count++

			if(count == 3)
				show()
		}))
	})
}
for (var i=0; i<3; i++)
	getHttp(i)