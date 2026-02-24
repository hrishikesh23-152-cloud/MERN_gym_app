const express = require('express');
const router = express.Router();
const {loginuser,registration} = require("../controllers/Usercontroller");
// Login Route
router.post("/login", loginuser);
// Register Route
router.post("/register", registration);
module.exports = router;