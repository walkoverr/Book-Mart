const express = require("express");
const {registerUser, loginUser} = require("../controllers/userController.js");

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);

module.exports = router;
