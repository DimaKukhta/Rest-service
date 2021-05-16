const router = require('express').Router({mergeParams: true});
const Task = require('./task.model');
const taskService = require('./task.service');

router.route('/').get(async (req, res) => {
  const { boardId } = req.params;
  const tasks = await taskService.getAll(boardId);
  res.status(200).json(tasks.map(Task.toResponse));
});

router.route('/:taskId').get(async (req, res) => {
    console.log(req.params)
    const { boardId, taskId } = req.params;
    const task = await taskService.getById(boardId, taskId)
    if (task) {
      res.status(200).json(Task.toResponse(task));
    } else {
      res.status(404).send('Task not found');
    }
  });

module.exports = router;