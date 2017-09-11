var express = require('express');

var routes = function () {
  var authRouter = express.Router();

  var authController = require('./../controllers/authController')();

  authRouter.route('/')
    .post(authController.login)
    .get(authController.logout)
    .post(authController.register);

  return authRouter;
};

module.exports = routes;
