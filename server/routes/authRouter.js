var express = require('express');

var routes = function () {
  var authRouter = express.Router();

  var authController = require('./../controllers/authController')();

  authRouter.route('/login').post(authController.login);
  authRouter.route('/signup').post(authController.register);  

  return authRouter;
};

module.exports = routes;
