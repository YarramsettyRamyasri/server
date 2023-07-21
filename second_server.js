var http = require('http');
var imp=require('./second_module');

http.createServer(function(req,res){
//  another method for creating a server
 const msg=imp.sample();
 console.log(msg);
res.write(msg);
 res.end();
}).listen(1234);
