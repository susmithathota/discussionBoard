var mongoose= require('mongoose');
var User= mongoose.model('User');
module.exports=(function(){

	return {
		login: function(req,res){
			// res.send('back end controller');
			User.findOne({name: req.body.name}, function(err,user){
				if(!user){
					var newUser= new User(req.body);
						newUser.save(function(err){
							if(err){
								return res.json({error : 'Something went wrong, please try later'});
							}
							req.session.user= newUser;
							req.session.save();

							res.json({status: true});
						});
				}
				else{
					req.session.user=user;
					req.session.save();
					res.json({status:true});
				}
			});
		},
		checkUser : function(req,res){
			if(!req.session || !req.session.user){
				res.json(req.session.user);
			}
			else{
				res.json(req.session.user);
			}
		},
		logout: function(req,res){
			req.session.destroy();
			res.redirect('/');
		},
		showUser:function(req,res){
			User.findOne({_id:req.params.id})
				.populate('topics')
				.exec(function(err,user){
					if(err) console.log(err)
					else{
						res.json(user);
					}
				})
			
		}
	}

})();