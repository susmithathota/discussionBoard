app.controller('sessionController',function(sessionFactory,$routeParams){
	var self=this;
	self.errors=[];

	sessionFactory.checkUser(function(data){
		self.curUser=data;
		console.log(data)
	});
	self.login= function(){
		self.errors=[];
		if(!self.logReg || !self.logReg.name){
			self.errors.push('please enter a name.');
		}
		else if(self.logReg.name.length<=3){
			self.errors.push("Name must be atleast 3 chars long");
		}
		else{
			
			sessionFactory.login(self.logReg);
		}
	}

	if($routeParams.userId){
		sessionFactory.showUser($routeParams.userId,function(data){
			self.userInfo=data;
		});
	}
	
})