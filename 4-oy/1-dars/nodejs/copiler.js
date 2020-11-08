let less = require('less');
let fs = require('fs');
let lessFile = fs.readFileSync('style.less',{encoding:'utf-8'});

less.render(lessFile,function(error,output){
    if(error) throw new Error(error);
    fs.writeFileSync('style/style.css',output.css);
});