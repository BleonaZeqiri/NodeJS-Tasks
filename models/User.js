const { ObjectId } = require("mongodb");

class User {
  constructor(fullName, email, username, password) {
    this.fullName = fullName;
    this.email = email;
    this.username = username;
    this.password = password;
    this.createdAt = new Date();
  }
}

module.exports = User;
