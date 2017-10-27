module.exports = function(app){

  app.post("/api/user", createUser);
  // app.get("/api/user?username=username", findUserByUsername);
  // app.get("/api/user?username=username&password=password", findUserByCredentials);
  app.get("/api/user", findUsers);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);
  app.get("/api/users", findAllUsers);

  users = [
    {_id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder'},
    {_id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley'},
    {_id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia'},
    {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi'}
  ];

  function findAllUsers(req, res) {
    "use strict";
    res.json(users);
  }
  function findUsers(req, res) {
    var username = req.query["username"];
    var password = req.query["password"];

    if(username && password) {
      var user = users.find(function (user) {
        return user.username === username && user.password === password;
      });
      if(user) {
        res.json(user);
      } else {
        res.json(null);
      }
    } else if (username) {
      var user = users.find(function (user) {
        return user.username === username;
      });
      if(user) {
        res.json(user);
      } else {
        res.json(null);
      }
    }
  }

  function createUser(req, res) {
   // var userId = Math.random().toString();
    var user = req.body;
   // user._id = userId;
    users.push(user);
    if(user) {
      res.json(user);
    } else {
      res.json(null);
    }
  }

  function findUserById(req, res) {
    var userId = req.params['userId'];
    var user;
    for (let x = 0; x < this.users.length; x++) {
      if (users[x]._id === userId) {
        user = users[x];
      }
    }
    if (user) {
      res.json(user);
    } else {
      res.json(null);
    }
  }

  function updateUser(req, res) {

    var userId = req.params['userId'];
var user = req.body;
    for (let x = 0; x < users.length; x++) {
      if (users[x]._id === userId) {
        users[x].firstName = user.firstName;
        users[x].lastName = user.lastName;
        }
    }
   // res.json(users[userId]);

  }

  // function findUserByUsername(req, res) {
  //
  //   for (let x = 0; x < this.users.length; x++) {
  //     if (users[x].username === username) {
  //       return users[x];
  //     }
  //   }
  //   return null;
  // }



  function deleteUser(req, res) {
   var userId = req.params['userId'];
    for (let x = 0; x < this.users.length; x++) {
      if (users[x]._id === userId) {
        users.splice(x, 1);
      }
    }
  }
  // findUserByCredentials(username, password) {
  //   for (let x = 0; x < this.users.length; x++) {
  //     if (this.users[x].username === username && this.users[x].password === password) {
  //       return this.users[x];
  //     }
  //   }
  //   return null;
  // }
}
