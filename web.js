var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.readFileSync('/index.html', function(err, data) {
    //var buffer = new Buffer(data);
    //response.send(buffer.toString('utf-8'));
    //response.send(data);
    response.send('TESTING');
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
