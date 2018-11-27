var express = require('express');
var app     = express();

app.get('/', function(request,response){
    response.send('Hello World!');
});

app.get('/time', function(request,response){
    response.send(new Date());
});
console.log("listening on 3000");
app.listen(3000);
