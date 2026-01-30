const express = require("express");
const controller = require("../controllers/tasks.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/create-task", authMiddleware, controller.createTaskController);
router.get("/tasks", controller.getTasksController);

module.exports = router;
