const Channels = require('mongoose').model('Channels');
const Messages = require('mongoose').model('Messages');

var messageController = function () {

  var post = function (req, res) {
    var message = new Messages(req.body);
    message.save(function (error, data) {
      if(error) {
        console.log(error);

        return res.status(500).json({msg: 'internal server error'});
      }

      Channels.findByIdAndUpdate(message.channelId, { $set: { lastMessage: data }}, { new: true }, function (err, channel) {
        if (err) {
          console.log(err);
        }

        res.json(data);
      });    
    });
  };

  var get = function (req, res) {
    const query = req.query;
    Messages.find({channelId: query.channelId}, function(error, data) {
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
