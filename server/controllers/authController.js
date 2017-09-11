var authController = function () {
    
  var login = function (req, res) {
    if (!req.body.fname || !req.body.lname || !req.body.email || !req.body.password) {
      res.status(400);
      res.send('required fields missing');
    }
    else {
      user.save();
      res.status(201);
      res.send(user);
    }
  }

  var logout = function (req, res) {
    
  }

  var register = function (req, res) {
    
  }
    
  return {
    login: login,
    logout: logout,
    register: register,
  };
};

module.exports = authController;
