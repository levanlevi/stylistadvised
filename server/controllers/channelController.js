const Channels = require('mongoose').model('Channels');

var channelController = function () {

  var post = function (req, res) {
    
    var channel = new Channel(req.body);
    channel.save(function (error, data) {
      if(error) {
        console.log(error);

        return res.status(500).json({msg: 'internal server error'});
      }

      res.json(data);
    });
  };

  var get = function (req, res) {
    Channels.find({ $or: [ {between: req.params.name}, {private: false } ] }, {name: 1, id: 1, private: 1, between: 1, _id: 0}, function(error, data) {
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

module.exports = channelController;