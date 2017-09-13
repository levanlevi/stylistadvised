var express = require('express');

var routes = function () {
  var userRouter = express.Router();

  var userController = require('./../controllers/userController')();

  userRouter.route('/')
    .post(userController.post)
    .get(userController.get);
  userRouter.use('/:userId', userController.singleMiddleware);
  userRouter.route('/:userId')
    .get(userController.getById)
    .put(userController.putUser)
    .patch(userController.patchUser)
    .delete(userController.deleteUser);

  return userRouter;
};

module.exports = routes;
