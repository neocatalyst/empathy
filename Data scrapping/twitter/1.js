var cid = '8a6c50414b47a87c68c90c6c8e3abedf';
var http = require ('http');
var p = '/users/3207.json?client_id=' + cid
var options = {
    host: 'api.soundcloud.com',
  port: 80,
  path: p
};

var getKeys = function(obj){
   var keys = [];
   for(var key in obj){
      keys.push(key);
   }
   return keys;
}

var log = console.log;
var url = 'http://api.soundcloud.com/users/3207.json?client_id=' + cid; 
http.get(options, function(res) {
  console.log("Got response: " + res.statusCode);

  res.on("data", function(chunk) {
      str = chunk.toString();
      obj = eval("(" + str + ")");
      log(obj);
      
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});
var db = require('./db.js');
db.addSong({id: '1', song: '12'});
