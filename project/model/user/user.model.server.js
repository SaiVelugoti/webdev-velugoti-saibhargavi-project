var mongoose = require("mongoose");
var UserSchema = require("./user.schema.server");
var UserModel = mongoose.model("UserModel", UserSchema);
var api = {
  findUserByFacebookId: findUserByFacebookId
}
UserModel.createUser = createUser;
UserModel.findUserById = findUserById;
UserModel.findUserByUsername = findUserByUsername;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;
UserModel.deleteAllUsers = deleteAllUsers;
UserModel.findAllUsers = findAllUsers;
UserModel.addToFavorites = addToFavorites;
UserModel.getInterestedEvents = getInterestedEvents;
UserModel.removeFromFavorites  = removeFromFavorites;
UserModel.addToFollow = addToFollow;
UserModel.removeFromFollow = removeFromFollow;
UserModel.addToFollowedBy = addToFollowedBy;
UserModel.removeFromFollowedBy = removeFromFollowedBy;
UserModel.addFollowers = addFollowers;

module.exports = UserModel;

function getInterestedEvents(userId) {
  return UserModel.find({_id: userId});
}
function findAllUsers() {
  return UserModel.find({});
}

function addToFavorites(userId, eventId, eventName) {
  "use strict";
  return UserModel.updateUser({_id: userId}, {$addToSet: {favoriteEvents: {eventId: eventId, eventName: eventName}}});
}

function removeFromFavorites(userId, eventId) {
  return UserModel.updateUser({_id: userId}, {$pull: {favoriteEvents: {eventId: eventId}}});
}
function findUserByFacebookId(facebookId) {
  return UserModel.findOne({'facebook.id': facebookId});
}

function createUser(user) {
  return UserModel.create(user);
}

function findUserById(userId) {
  return UserModel.findOne({_id: userId});
}

function findUserByUsername(username) {
  return UserModel.findOne({username: username});
}

function findUserByCredentials(username, password) {
  return UserModel.findOne({username: username, password: password});
}

function updateUser(userId, user) {
  return UserModel.update({_id: userId}, user);
}

function deleteUser(userId) {
  return UserModel.deleteOne({_id: userId});
}

function deleteAllUsers() {
  return UserModel.remove({});
}

function addToFollow(userId, followingId) {
  return UserModel.update({_id: userId}, {$addToSet: {followingUsers: followingId}});
}

function addFollowers(userId, followedById) {
  return UserModel.update({_id: userId}, {$addToSet: {followedBy: followedById}});
}

function removeFromFollow(userId, unFollowId) {
  return UserModel.update({_id: userId}, {$pullAll: {followingUsers: [unFollowId]}});
}

function addToFollowedBy(userId, followingId) {
  // "use strict";
  return UserModel.update({_id: followingId}, {$addToSet: {followedBy: userId}});
}

function removeFromFollowedBy(userId, unfollowedById) {
  // "use strict";
  return UserModel.update({_id: unfollowedById}, {$pullAll: {followedBy: [userId]}});
}
