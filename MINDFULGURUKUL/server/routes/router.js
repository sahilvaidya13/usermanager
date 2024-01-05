const express = require("express");
const router = express.Router();

const { register, login, fetchProps } = require("../controller/Controller");

// router.post("/in", signin);
// router.post("/up", signup);

router.post("/signup", register);
router.post("/login", login);
router.get("/fetchProps:id", fetchProps);

module.exports = router;