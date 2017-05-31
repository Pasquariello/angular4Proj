//will hold message file
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  content: {type: String, required: true},
    // ref says that we have a reference to another model!
  user: {type: Schema.Types.ObjectId, ref: 'User'}
});
// Message is the name of the model
module.exports = mongoose.model('Message', schema);
