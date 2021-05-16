const { repository } = require('../boards/board.memory.repository');

const getAll = (id) => {
  const board = repository.find((element) => element.id === id);
  return board.columns;
};

const getById = (boardId, taskId) => {
  const board = repository.find((element) => element.id === boardId);
  // console.log(board)
  if (board) {
      console.log('columns', board.columns);
      console.log(taskId)
    return board.columns.find((element) => element.id === taskId);
  }
  return 0;
};
module.exports = { getAll, getById };
