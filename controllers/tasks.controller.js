const taskService = require("../services/tasks.service");

exports.getTasksController = async (req, res, next) => {
  try {
    return res.status(200).json(await taskService.getTasks(req.query));
  } catch (err) {
    throw err;
  }
};

exports.createTaskController = async (req, res) => {
  try {
    return res.status(201).json(await taskService.createTask(req.body));
  } catch (err) {
    throw err;
  }
};
