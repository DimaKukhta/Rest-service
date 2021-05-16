const tasksRepo = require('./task.memory.repository');

const getAll = (id) => tasksRepo.getAll(id);

const getById = (boardId, taskId) => tasksRepo.getById(boardId, taskId);

module.exports = { getAll, getById };