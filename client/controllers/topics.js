app.controller('topicsController',function(sessionFactory,topicsFactory,$routeParams){
	var self=this;
	sessionFactory.checkUser(function(data){
		self.curUser=data._id;
	});
	self.addTopic=function(){
		self.errors=[]
		if(!self.newTopic || !self.newTopic.topic){
			self.errors.push("please enter topic");
		}
		else{
			self.newTopic.user=self.curUser;
			topicsFactory.addTopic(self.newTopic,function(data){
				if(data){
					getTopics();
				}
			});
		}
		
	}
	function getTopics(){
		topicsFactory.getTopics(function(data){
			self.topicsList=data;
		})
	}
	getTopics();

	if($routeParams.id){
		topicsFactory.showTopic($routeParams.id,function(data){
			self.topicInfo=data;
		})
	}
	self.likeTopic=function(id){
		topicsFactory.likeTopic(id,function(data){
			if(data){
				getTopics();
			}
		})
	}
})