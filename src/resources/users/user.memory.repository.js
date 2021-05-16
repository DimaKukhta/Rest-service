let repository = [];

const getAll = async () => repository;

const getById = async (id) => repository.find((element) => element.id === id);

const createUser = async (user) => repository.push(user);

const updateUser = async (id, name, login, password) => {
  const index = repository.findIndex((element) => element.id === id);
  if (index === -1) {
    return -1;
  }
  repository[index] = { id: repository[index].id, name, login, password };
  return repository[index];
};

const deleteUser = async (id) => {
  const index = repository.findIndex((element) => element.id === id);
  if (index !== -1) {
    repository = repository.filter((element) => element.id !== id);
    return 204;
  } 
  return 404;
};

module.exports = { getAll, getById, createUser, updateUser, deleteUser };
