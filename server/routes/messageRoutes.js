var express = require('express');

var routes = function () {
  var messageRouter = express.Router();

  var messageController = require('./../controllers/messageController')();

  messageRouter.route('/').post(messageController.post);
  messageRouter.route('/:channel').get(messageController.get);

  return messageRouter;
};

module.exports = routes;
