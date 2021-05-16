const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.status(200).json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.getById(req.params.id);
  if (user) {
    res.status(200).json(User.toResponse(user));
  } else {
    res.status(404).send('User not found');
  }
});

router.route('/').post(async (req, res) => {
  const { name, login, password } = req.body;
  if (name && login && password) {
    const user = new User({name, login, password });
    await usersService.createUser(user);
    res.status(201).json(User.toResponse(user));
  } else {
    res.status(400).send('Post method error');
  }
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const { name, login, password } = req.body;
  if (id && name && login && password) {
    const user = await usersService.updateUser(id, name, login, password);
    if (user === -1) {
      res.status(400).send('Put method error');
    } else {
      res.status(200).json(User.toResponse(user));
    }
  } else {
    res.status(400).send('Put method error');
  }
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  const code = await usersService.deleteUser(id);
  res.status(code).send('Delete user method');
});

module.exports = router;
