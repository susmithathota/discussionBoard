var mongoose= require('mongoose');
var User=mongoose.model('User');
var Topic=mongoose.model('Topic');

module.exports=(function(){
	return{
		addTopic:function(req,res){
			var newTopic= new Topic(req.body);
			console.log(req.body);
			User.findOne({_id:req.body.user},function(err,user){
				if(err) console.log(err)
				else{
					newTopic.user=user._id;
					newTopic.save(function(err){
						if(err) console.log(err)
						else{
							user.topics.push(newTopic._id);
							user.save(function(err){
								if(err) console.log(err)
								else{
									res.json({status:true});
								}
							})
						}
					})
				}
			})
		},
		getTopics: function(req,res){
			Topic.find({})
			.populate('user')
			.exec(function(err,result){
				if(err) console.log(err)
				else{
					res.json(result);
				}
			})
		},
		showTopic:function(req,res){
			Topic.findOne({_id:req.params.id})
			.populate('user')
			.exec(function(err,result){
				if(err) console.log(err)
				else{
					res.json(result);
				}
			})
		},
		likeTopic:function(req,res){
			Topic.findOne({_id:req.params.id},function(err,topic){
				if(err) console.log(err)
				else{
					topic.likes += 1;
					topic.save(function(err){
						if(err) console.log(err)
						else{
							res.json(topic);
						}
					})
				}
			})
		}
	}
})();
