app.factory('topicsFactory',function($http){
	var factory={};
	factory.addTopic=function(topic,cb){
		$http.post('/addTopic',topic).then(function(output){
			cb(output.data);
		})
	}
	factory.getTopics=function(cb){
		$http.get('/getTopics').then(function(output){
			cb(output.data);
		})
	}
	factory.showTopic=function(id,cb){
		$http.get('/showTopic/'+id).then(function(output){
			cb(output.data);
		})
	}
	factory.likeTopic=function(id,cb){
		$http.post('/likeTopic/'+id).then(function(output){
			cb(output.data);
		})
	}
	return factory;
})