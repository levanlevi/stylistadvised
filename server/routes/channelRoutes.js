var express = require('express');

var routes = function () {
  var channelRouter = express.Router();

  var channelController = require('./../controllers/channelController')();

  channelRouter.route('/')
    .post(channelController.post)
    .get(channelController.get);

  return channelRouter;
};

module.exports = routes;
