var mongoose= require('mongoose');
var Schema=mongoose.Schema;

var UserSchema= new Schema({
	name: String,
	topics:[{type:Schema.Types.ObjectId, ref:'Topic'}],
});
mongoose.model('User',UserSchema);