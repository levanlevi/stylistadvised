const Users = require('mongoose').model('Users');

var userController = function () {

  var post = function (req, res) {
    var user = new Users(req.body);

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
    let query = req.query;

    const pagination = {};
    if (query.skip) {
      pagination.skip = +query.skip;
      delete query.skip;
    }
    if (query.limit) {
      pagination.limit = +query.limit;
      delete query.limit;
    }

    Users.find(query, '_id fname lname name email userType picture location aboutMe', pagination, function (error, users) {
      if (error)
        res.status(500).send(error);
      else {
        Users.count(query, function (err, count) {
          if (err) {
            res.status(500).send(err);
          } else {
            res.json({ count: count, users: users });
          }
        });        
      }
    });
  }

  var singleMiddleware = function (req, res, next) {
    Users.findById(req.params.userId, function (error, user) {
      if (error) {
        res.status(500).send(error);
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
    req.user.location = req.body.location;
    req.user.aboutMe = req.body.aboutMe;
    req.user.userType = req.body.userType;
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

    req.user.save(function (error) {
      if (error) {
        res.status(500).send(error);
      }
      else {
        res.json(req.user);
      }
    })
  }

  var deleteUser = function (req, res) {
    req.user.remove(function (error) {
      if (error) {
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
