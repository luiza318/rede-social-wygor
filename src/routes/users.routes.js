const express = require("express");
const { id, update } = require("../controller/users.controller");
const { authRequired } = require("../middlewares/auth.middleware");
const { register, login } = require("../controller/auth.controller");
const router = express.Router();

router.post("/", register);
router.post("/login", login);
router.get("/:id", authRequired, id);
router.put("/:id", authRequired, update);

module.exports = router;
