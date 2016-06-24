var fs = require('fs');


fs.readFile(process.argv[2], function(error, contents){
  if(!error){
    var line = contents.toString().split('\n').length-1; 
    console.log(line);
  }
});
