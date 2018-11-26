var express = require('express');
var app     = express();
var test = require('unit.js');

app.get('/', function(request,response){
    response.send('Hello World!');
});

app.get('/time', function(request,response){
    response.send(new Date());
});
console.log("listening on 3000");
app.listen(3000);
// do a test 
var str = 'Hello, world!';

test.string(str).startsWith('Hello');

if (test.string(str).startsWith('Hello')) {
  console.log('Passed');
}