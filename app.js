

// const wss = new WebSocket.Server({port : 8084})
// https://random-word-api.herokuapp.com/word?number=1&swear=0
var http = require('http'),
    fs = require('fs');


fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8000);
});


// wss.on("connection", ws =>{
//     ws.on("message", data =>{

//     })
// })