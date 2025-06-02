const express = require("express");
const router = express.Router();
const { registrar, login, logout } = require("../controllers/authController");

router.post("/registrar", registrar);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
