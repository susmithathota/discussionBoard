var session=require("./../controllers/session.js");
var topics=require("./../controllers/topics.js");


module.exports=function(app){
	app.post('/login',function(req,res){
		session.login(req,res);
	})
	app.get('/checkUser', function(req,res){
		session.checkUser(req,res);
	})
	app.get('/logout',function(req,res){
		session.logout(req,res);
	})
	app.post('/addTopic',function(req,res){
		topics.addTopic(req,res);
	})
	app.get('/getTopics',function(req,res){
		topics.getTopics(req,res);
	})
	app.get('/showUser/:id',function(req,res){
		session.showUser(req,res);
	})
	app.get('/showTopic/:id',function(req,res){
		topics.showTopic(req,res);
	})
	app.post('/likeTopic/:id',function(req,res){
		topics.likeTopic(req,res);
	})
}