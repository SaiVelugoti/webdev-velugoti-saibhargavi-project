module.exports = function (app) {

  var userModel = require("../model/user/user.model.server");
  var eventModel = require("../model/event/event.model.server");
  var passport = require('passport');
  var LocalStrategy = require('passport-local').Strategy;
  var FacebookStrategy = require('passport-facebook').Strategy;
  var bcrypt = require("bcrypt-nodejs");

  var facebookConfig = {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL
  }
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);
  passport.use(new LocalStrategy(localStrategy));

  app.post("/api/user", createUser);
  app.put("/api/user/:userId", updateUser);

  app.get("/api/user", findUser);
  app.get("/api/users", findAllUsers);
  app.get("/api/user/:userId", findUserById);

  app.delete("/api/user/:userId", deleteUser);
  app.delete("/api/deleteAllUsers", deleteAllUsers);

  app.post("/api/login", passport.authenticate('local'), login);
  app.post("/api/logout", logout);
  app.post("/api/register", register);
  app.post("/api/loggedIn", loggedIn);

  app.get("/facebook/login", passport.authenticate('facebook', {scope: 'email'}));

  app.post("/api/addToFavorites", addToFavorites);
  app.post("/api/removeFromFavorites", removeFromFavorites);
  app.get("/api/getInterestedEvents/:userId", getInterestedEvents);

  app.get("/api/user/:userId/dashboard/followedBy", findUsersFollowedBy);
  app.get("/api/user/:userId/dashboard/following", findUsersFollowing);

  app.put("/api/user/:userId/following/:followingId", addToFollowList);
  app.put("/api/user/:userId/unFollow/:followingId", removeFromFollowList);

  app.put("/api/user/:followingId/followedBy/:userId", addToFollowedBy);
  app.put("/api/user/:followingId/unfollowedBy/:userId", removeFromFollowedBy);

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: '/profile',
      failureRedirect: '/login'
    }));

  function login(req, res) {
    var user = req.user;
    res.json(user);
  }

  function logout(req, res) {
    req.logOut();
    res.send(200);
  }

  function register(req, res) {
    "use strict";
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);

    return userModel.createUser(user)
      .then(
        function (user) {
          if (user) {
            req.login(user, function (err) {
              if (err) {
                res.status(400).send(err);
              } else {
                res.json(user);
              }
            })
          }
        })
  }

  function loggedIn(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    userModel
      .findUserById(user._id)
      .then(
        function (user) {
          done(null, user);
        },
        function (err) {
          done(err, null);
        }
      );
  }

  function localStrategy(username, password, done) {
    "use strict";
    userModel
      .findUserByUsername(username)
      .then(
        function (user) {
          if (user && bcrypt.compareSync(password, user.password)) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        },
        function (err) {
          if (err) {
            return done(err);
          }
        }
      );
  }

  function createUser(req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
    console.log('creating new user-> user service server');
    return userModel.createUser(user)
      .then(
        function (user) {
          console.log('--1--');
                res.json(user);
        });
  }

  function findUser(req, res) {
    var username = req.query["username"];
    var password = req.query["password"];

    if (username && password) {
      userModel
        .findUserByCredentials(username, password)
        .then(function (user) {
          if (user) {
            res.json(user);
          } else {
            res.json(null);
          }
        });
      return;

    } else if (username) {
      userModel
        .findUserByUsername(username)
        .then(function (user) {
          if (user) {
            res.json(user);
          } else {
            res.json(null);
          }
        });
      return;
    }
    return res.json({});
  }

  function findUserById(req, res) {
    var userId = req.params['userId'];
    userModel
      .findUserById(userId)
      .then(function (user) {
        if (user) {
          res.json(user);
        } else {
          res.json(null);
        }
      });
    return;
  }

  function updateUser(req, res) {

    var userId = req.params['userId'];
    var userBody = req.body;
    userModel.updateUser(userId, userBody)
      .then(function (returnedUser) {
        res.json(returnedUser);
      });
  }

  function addToFavorites(req, res) {
    var userId = req.body.userId;
    var eventId = req.body.eventId;
    var eventName = req.body.eventName;
    userModel.addToFavorites(userId, eventId, eventName)
      .then(function (returnedResult) {
        eventModel.addEvent(eventId, eventName)
          .then(function (addedEvent) {
            res.json(addedEvent);
          })
        res.json(returnedResult);
      });
  }

  function removeFromFavorites(req, res) {
    var userId = req.body.userId;
    var eventName = req.body.eventName;
    userModel.removeFromFavorites(userId, eventName)
      .then(function (returnedResult) {
        res.json(returnedResult);
      });
  }

  function deleteUser(req, res) {
    var userId = req.params['userId'];
    //var user = req.body;
    userModel.deleteUser(userId)
      .then(function (user) {
        res.json(user);
      });
  }

  function deleteAllUsers(req, res) {
    userModel.deleteAllUsers()
      .then(function (res1) {
        res.json(res1);
      })
  }

  function findAllUsers(req, res) {
    userModel.findAllUsers()
      .then(function (res1) {
        res.json(res1);
      })
  }

  function getInterestedEvents(req, res) {
    "use strict";
    // const uID = req.body.userId;
    var userId = req.params['userId'];
    userModel.getInterestedEvents(userId)
      .then(function (events) {
        res.json(events);
      })
  }

  function findUsersFollowing(req, res) {
    var userId = req.params["userId"];
    return userModel.findUserById(userId)
      .then(function (user) {
        res.json(user);

      });
  }

  function findUsersFollowedBy(req, res) {
    var userId = req.params["userId"];
    return userModel.findUsersFollowedBy(userId)
      .then(function (users) {
        res.json(users);

      });
  }

  function addToFollowList(req, res) {
    var followingId = req.params["followingId"];
    var userId = req.params["userId"];
    return userModel.addToFollow(userId, followingId)
      .then(function (user) {
        res.json(user);
      });
  }

  function addToFollowedBy(req, res) {
    var followingId = req.params["followingId"];
    var userId = req.params["userId"];
    return userModel.addToFollowedBy(userId, followingId)
      .then(function (user) {
        res.json(user);
      });

  }

  function removeFromFollowList(req, res) {
    var unfollowId = req.params["followingId"];
    var userId = req.params["userId"];
    return userModel.removeFromFollow(userId, unfollowId)
      .then(function (user) {
        res.json(user);
      });
  }

  function removeFromFollowedBy(req, res) {
    var unfollowedById = req.params["followingId"];
    var userId = req.params["userId"];
    return userModel.removeFromFollowedBy(userId, unfollowedById)
      .then(function (user) {
        res.json(user);
      });
  }
}
