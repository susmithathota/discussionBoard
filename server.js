var express= require('express');
var bodyParser= require('body-parser');
var path=require('path');
var session= require('express-session');
var app=express();
var port=8000;

app.use(express.static(path.join(__dirname,'./client')));
app.use(bodyParser.json());
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized:true
}));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(port,function(){
	console.log('app listening on 8000');
});

