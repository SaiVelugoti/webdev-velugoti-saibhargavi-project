var mongoose = require("mongoose");
var UserSchema = mongoose.Schema({
  facebook: {
    id: String,
    token: String
  },
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  dateCreated: {type: Date, default: Date.now()}
}, {collection: 'user'});

module.exports = UserSchema;