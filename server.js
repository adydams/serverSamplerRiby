var express = require('express');

// Express Instance
var app = express();

app.get('riby', function(req, res){
    res.send({
        data: "swag riby"
    })
});
app.listen('8080', function(){
    console.log('Server is Running');
})