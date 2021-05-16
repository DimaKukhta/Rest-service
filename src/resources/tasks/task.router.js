const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const taskService = require('./task.service');

router.route('/').get(async (req, res) => {
  const { boardId } = req.params;
  const tasks = await taskService.getAll(boardId);
  if (tasks.length) {
    res.status(200).json(tasks.map(Task.toResponse));
  } else {
    res.status(200).send('Not found');
  }
});

router.route('/').post(async (req, res) => {
  const { boardId } = req.params;
  const { title, order, description, userId, columnId } = req.body;
  const task = new Task({
    title,
    order,
    description,
    userId,
    boardId,
    columnId,
  });
  await taskService.createTask(task);
  res.status(201).json(Task.toResponse(task));
});

router.route('/:taskId').get(async (req, res) => {
  const { taskId } = req.params;
  const task = await taskService.getById(taskId);
  if (task) {
    res.status(200).json(Task.toResponse(task));
  } else {
    res.status(404).send('Not found');
  }
});

router.route('/:taskId').put(async (req, res) => {
  const { taskId } = req.params;
  const { title, order, description, userId, boardId, columnId } = req.body;
  const task = taskService.updateTask(taskId, title, order, description, userId, boardId, columnId);
  res.status(200).json(Task.toResponse(task));
  
});

router.route('/:taskId').delete(async (req, res) => {
  const { taskId } = req.params;
  const code = await taskService.deleteTask(taskId);
  res.status(code).send('Delete user method');
});


module.exports = router;
