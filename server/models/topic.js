var mongoose= require('mongoose');
var Schema=mongoose.Schema;

var TopicSchema=new Schema({
	topic:{type:String},
	description:{type:String},
	category:{type:String},
	likes:{type:Number,default:0},
	user:{type:Schema.Types.ObjectId,ref:'User'}
},{timestamps:true});

mongoose.model('Topic',TopicSchema);