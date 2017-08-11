var express = require('express')
var app = express()

//app.get('*', function(req, res) {
//  res.sendFile(__dirname + '/index.html'); 
//})

app.use(express.static(__dirname));

app.listen(8000, function () {
  console.log('listening on port 8000!')
})