var mongoose = require("mongoose");
var connectionString = 'mongodb://localhost/cs5610Project';
if (process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds133856.mlab.com:33856/heroku_6x5zz61s'; // use yours
}

var db = mongoose.connect(connectionString, {useMongoClient: true});

// mongoose.Promise = global.Promise;
module.exports = db;

