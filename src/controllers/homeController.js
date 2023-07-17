const Authentication = require("../models/Authentication.js");

class homeController {
  register(req, res, next) {
    res.render("register");
  }

  login(req, res, next) {
    res.render("login");
  }

  profile(req, res, next) {
    res.render("personalinfo/profile");
  }

  editprofile(req, res, next) {
    res.render("personalinfo/editprofile");
  }
}

module.exports = new homeController();
