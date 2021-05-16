// const { repository } = require('../boards/board.memory.repository');
let repository = [];

const getAll = (id) => repository.filter((element) => element.id !== id);

const getById = (taskId) => repository.find((element) => element.id === taskId);

const createTask = (task) => {
  repository.push(task);
};

const updateTask = (
  taskId,
  title,
  order,
  description,
  userId,
  boardId,
  columnId
) => {
  const index = repository.findIndex((element) => element.id === taskId);
  if (index === -1) {
    return -1;
  }
  repository[index] = {
    id: repository[index].id,
    title,
    order,
    description,
    userId,
    boardId,
    columnId,
  };
  return repository[index];
};

const deleteTask = (taskId) => {
  const index = repository.findIndex((element) => element.id === taskId);
  if (index !== -1) {
    repository = repository.filter((element) => element.id !== taskId);
    return 204;
  }
  return 404;
};

/* const repository = [];

const getAll = async () => repository;

const createBoard = async (board) => repository.push(board);

const getById = async (id) => repository.find((element) => element.id === id); */

module.exports = { getAll, getById, createTask, updateTask, deleteTask };
