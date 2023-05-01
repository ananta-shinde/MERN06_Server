const express = require("express");
const router = express.Router();
const userController = require("../controller/user")

router.get("/", userController.getUserList)
router.put("/", userController.update)
router.post("/signup", userController.signup)
router.post("/login", userController.login)
router.delete("/", userController.deleteU)

module.exports = router;

