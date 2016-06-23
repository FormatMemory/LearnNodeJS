var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
//console.log(process.argv)
var str = buffer.toString();
var aryStr = str.split('\n');
var count = aryStr.length-1;
console.log(count);
