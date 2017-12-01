const Messages = require('mongoose').model('Messages');

var messageController = function () {

  var post = function (req, res) {
    
    var message = new Message(req.body);
    message.save(function (error, data) {
      if(error) {
        console.log(error);

        return res.status(500).json({msg: 'internal server error'});
      }

      res.json(data);
    });
  };

  var get = function (req, res) {
    Messages.find({channelId: req.params.channel}, {id: 1, channelID: 1, text: 1, user: 1, time: 1, _id: 0}, function(error, data) {
      if(error) {
        console.log(error);

        return res.status(500).json({msg: 'internal server error'});
      }

      res.json(data);
    });
  }


  return {
    post: post,
    get: get,
  };
};

module.exports = messageController;
