//holds all messages to BE
var express = require ('express');
var router = express.Router();
//need access to message model inorder to interact with it
var Message = require('../models/message');

//fetch messages from DB
router.get('/', function(req, res, next){
  Message.find()
  .exec(function(err, messages) {
    if (err) {
      return res.status(500).json({
        title: 'An Error Occurred',
        error: err
      });
    }
    res.status(200).json({
      message: 'Success',
      obj: messages
    })
  })
});
//post messages to DB
//path remains '/'
router.post('/', function(req, res, next){
  var message = new Message({
    //I can assume that my request will send me the content in the body of my req
    content: req.body.content
  });
  message.save(function(err, result){
    if (err) {
      return res.status(500).json({
        title: 'An Error Occurred',
        error: err
      });
    }
    res.status(201).json({
      message:'Saved Message',
      obj: result
    });
  });
});

module.exports = router;
