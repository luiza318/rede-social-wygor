const express = require("express");
const router = express.Router();
const authRequired = require("../middlewares/auth.middleware");
const tasksController = require("../controllers/tasks.controller");
router.get("/", authRequired, tasksController.list);
router.post("/", authRequired, tasksController.create);
module.exports = router;