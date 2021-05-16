let repository = [];

const getAll = async () => repository;

const createBoard = async (board) => repository.push(board);

const getById = async (id) => repository.find((element) => element.id === id);

const updateBoard = async (id, title, columns) => {
  const index = repository.findIndex((element) => element.id === id);
  if (index === -1) {
    return -1;
  }
  repository[index] = { id: repository[index].id, title, columns };
  return repository[index];
};

const deleteBoard = async (id) => {
  const index = repository.findIndex((element) => element.id === id);
  if (index !== -1) {
    repository = repository.filter((element) => element.id !== id);
    return 204;
  }
  return 404;
};

module.exports = { getAll, createBoard, getById, updateBoard, deleteBoard, repository };
