var fs = require('fs')
var buf = fs.readFileSync(process.argv[2])
var str = buf.toString()
var count = 0;
for (var i=0; i<str.length; i++)
{
	if (str[i] == '\n')
		count = count + 1;
}
console.log(count);