const express = require("express");
const controller = require("../controllers/tasks.controller");

const router = express.Router();

router.post("/create-task", controller.createTaskController);
router.get("/tasks", controller.getTasksController);

module.exports = router;
