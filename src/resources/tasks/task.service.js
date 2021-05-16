const tasksRepo = require('./task.memory.repository');

const getAll = (id) => tasksRepo.getAll(id);

const getById = (taskId) => tasksRepo.getById(taskId);

const createTask = (task) => tasksRepo.createTask(task);

const updateTask = (
  taskId,
  title,
  order,
  description,
  userId,
  boardId,
  columnId
) =>
  tasksRepo.updateTask(
    taskId,
    title,
    order,
    description,
    userId,
    boardId,
    columnId
  );

const deleteTask = (taskId) => tasksRepo.deleteTask(taskId);

module.exports = { getAll, getById, createTask, updateTask, deleteTask };
