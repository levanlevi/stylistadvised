const Channels = require('mongoose').model('Channels');

var channelController = function () {

  var post = function (req, res) {
    var channel = new Channels(req.body);
    channel.save(function (error, data) {
      if(error) {
        console.log(error);

        return res.status(500).json({msg: 'internal server error'});
      }

      res.json(data);
    });
  };

  var get = function (req, res) {
    const query = req.query;
    Channels.find({ "id": { "$regex": query.userId, "$options": "i" } }, function(error, data) {
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
