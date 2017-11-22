const Users = require('mongoose').model('Users');

var userController = function () {

  var post = function (req, res) {
    var user = new User(req.body);

    if (!req.body.fname || !req.body.lname || !req.body.name || !req.body.email || !req.body.password) {
      res.status(400);
      res.send('required fields missing');
    }
    else {
      user.save();
      res.status(201);
      res.send(user);
    }
  };

  var get = function (req, res) {
    var query = req.query;

    Users.find(query, '_id fname lname name email userType picture', function (err, users) {
      if (err)
        res.status(500).send(err);
      else {
        res.json(users);
      }
    });
  }

  var singleMiddleware = function (req, res, next) {
    Users.findById(req.params.userId, function (err, user) {
      if (err) {
        res.status(500).send(err);
      }
      else if (user) {
        req.user = user;
        next();
      }
      else {
        res.status(404).send('user not found');
      }
    });
  }

  var getById = function (req, res) {
    res.send(req.user);
  }

  var putUser = function (req, res) {
    req.user.fname = req.body.fname;
    req.user.lname = req.body.lname;
    req.user.name = req.body.name;
    req.user.picture = req.body.picture;
    req.user.email = req.body.email;
    req.user.roleType = req.body.roleType;
    req.user.password = req.body.password;
    req.user.save();
    res.json(req.user);
  }

  var patchUser = function (req, res) {
    if (req.body._id) {
      delete req.body._id;
    }

    for (var p in req.body) {
      req.user[p] = req.user[p];
    }

    req.user.save(function (err) {
      if (err) {
        res.status(500).send(err);
      }
      else {
        res.json(req.user);
      }
    })
  }

  var deleteUser = function (req, res) {
    req.user.remove(function (err) {
      if (err) {
        res.status(500).send();
      }
      else {
        res.status(204).send('user removed');
      }
    });
  }

  return {
    post: post,
    get: get,
    getById: getById,
    putUser: putUser,
    patchUser: patchUser,
    deleteUser: deleteUser,
    singleMiddleware: singleMiddleware,
  };
};

module.exports = userController;
