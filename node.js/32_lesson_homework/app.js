
var express = require('express');
var app = express();
var fs = require("fs");
var courntTimePage="";
var hour=require("./chackHour.js");

app.use(express.static('images'));


if(hour.hour<12&&hour.hour>=6){

    fs.readFile("./morning.html", "utf-8", function(err, data){
		courntTimePage=data;
    });
}

else if(hour.hour>=12&&hour.hour<16){
    fs.readFile("./afternoon.html", "utf-8", function(err, data){
        courntTimePage=data;
    });
}

else if(hour.hour>=16&&hour.hour<20){
    fs.readFile("./evening.html", "utf-8", function(err, data){
		courntTimePage=data;
    });
}

else{
    fs.readFile("./night.html", "utf-8", function(err, data){
        courntTimePage=data;
    });
}


app.get('/', function(req, res){
    res.writeHead(200, {"Content-Type": "text/html"});
    
    console.log("User requested page...");

	res.write(courntTimePage);
	
	res.end();
});

app.listen(3200);