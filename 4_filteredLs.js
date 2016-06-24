var fs = require('fs');
var path = require('path');

var folder = process.argv[2];
var extension = '.' + process.argv[3];

fs.readdir(folder, function(err, file){
  if(err) return console.error(err);
  else{
    file.forEach(function(fl){
      if(path.extname(fl) === extension){
          console.log(fl);
      }
    });
  }
});

