const Authentication = require("../models/Authentication.js");

class homeController {
  home(req, res, next) {
    res.render("home");
  }
}

module.exports = new homeController();
