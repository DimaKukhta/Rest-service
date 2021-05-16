const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();
const createBoard = (board) => boardsRepo.createBoard(board);
const getById = (id) => boardsRepo.getById(id);
const updateBoard = (id, title, columns) => boardsRepo.updateBoard(id, title, columns);
const deleteBoard = (id) => boardsRepo.deleteBoard(id);

module.exports = { getAll, createBoard, getById, updateBoard, deleteBoard };
