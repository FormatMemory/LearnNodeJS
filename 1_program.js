//console.log(process.argv)
var ary = process.argv
var sum = 0;
for( var i = 2; i < ary.length; i++){
    sum += Number(ary[i]);
}
console.log(sum)
