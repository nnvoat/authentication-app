const express = require("express");
const router = express.Router();

const homeController = require("../app/controllers/homeController.js");

router.get("/register", homeController.register);

router.post("/inforegister", homeController.inforegister);

router.get("/login", homeController.login);

router.post("/login", homeController.logininfo);

router.get("/profile", homeController.profile);

router.get("/editprofile", homeController.editprofile);

module.exports = router;
