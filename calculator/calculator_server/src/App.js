
const bodyParser=require('body-parser');
var urlencodedPraser=bodyParser.urlencoded({extended:false});
var express = require('express')
  , path = require('path');

var app = express();
                      app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
app.listen(5001,'127.0.0.1');
console.log('now listenring to port 5001');

app.use(bodyParser());
app.get('/api/add',urlencodedPraser,function(req,res){
	console.log('addition');
	var sum=0;
	sum=parseInt(req.query.num1)+parseInt(req.query.num2);
	console.log(sum);
	res.json({sum});
});

app.get('/api/sub',urlencodedPraser,function(req,res){
	var sum=0;
	sum=parseInt(req.query.num1)-parseInt(req.query.num2);
	console.log(sum);
	res.json({sum});
});

app.get('/api/mul',urlencodedPraser,function(req,res){
	var sum=0;
	sum=parseInt(req.query.num1)*parseInt(req.query.num2);
	console.log(sum);
	res.json({sum});
});

app.get('/api/div',urlencodedPraser,function(req,res){
	var sum=0;
	sum=parseInt(req.query.num1)/parseInt(req.query.num2);
	console.log(sum);
	res.json({sum});
});