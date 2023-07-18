const Authentication = require("../models/Authentication.js");
const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../../util/index.js");

class homeController {
  register(req, res, next) {
    // [GET] /register
    Authentication.find({})
      .then((auth) => {
        res.render("register", {
          auth: mutipleMongooseToObject(auth),
        });
        console.log(auth);
      })
      .catch(next);
  }

  inforegister(req, res, next) {
    // [POST] /inforegister
    const auth = new Authentication(req.body);
    auth
      .save()
      .then(() => res.redirect("/login"))
      .catch((err) => console.log(err));
  }

  // [GET] /login
  login(req, res, next) {
    res.render("login");
  }

  // [POST] /login
  logininfo(req, res, next) {
    Authentication.findOne({ email: req.body.email })
      .then((user) => {
        if (!user) {
          // Not user
          res.status(404).json({ message: "User does not exist" });
        }
        if (user.password !== req.body.password) {
          // Wrong password
          res.status(401).json({ message: "Wrong password" });
        }
        // Exactly and Rediect
        res.status(200).redirect("/profile");
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          message: "Error! An error occurred. Please try again later",
        });
      });
  }

  profile(req, res, next) {
    res.render("personalinfo/profile");
  }

  editprofile(req, res, next) {
    res.render("personalinfo/editprofile");
  }
}

module.exports = new homeController();
