const express = require("express");
const router = express.Router();

const homeController = require("../controllers/homeController.js");

router.get("/register", homeController.register);

router.get("/login", homeController.login);

router.get("/profile", homeController.profile);

router.get("/editprofile", homeController.editprofile);

module.exports = router;
