var fs = require('fs');
var path = require('path');
var folder = process.argv[2];
var oldExt = '.' + process.argv[3];
var newExt = '.' + process.argv[4];

function changeExt(err, files){
  if(err) return console.error(err);
  files.forEach(function(file){
    if(path.extname(file) === oldExt){
        /* //here is another solution, however, it works not well when filename contains '.'
        var newName = path.basename(file).substr(0, file.lastIndexOf('.')) + newExt;
        */
        newName = path.basename(file, oldExt) + newExt;
        fs.rename(path.basename(file), newName); 
        console.log(path.basename(file) + ' ----> ' + newName);
    }
  })
  console.log('Done.');
};
console.log('Start change extension...');
fs.readdir(folder, changeExt);
