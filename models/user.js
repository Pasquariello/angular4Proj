var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');
var schema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  // ref says that we have a reference to another model!
  messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]

});

schema.plugin(mongooseUniqueValidator);

// User is the name of the model
module.exports = mongoose.model('User', schema);
