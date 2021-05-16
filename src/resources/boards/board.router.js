const router = require('express').Router();
const Board = require('./board.model');
const boardService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAll();
  res.status(200).json(boards.map(Board.toResponse));
});

router.route('/').post(async (req, res) => {
  const { title, columns } = req.body;
  if (title && columns) {
    const board = new Board({ title, columns });
    await boardService.createBoard(board);
    res.status(201).json(Board.toResponse(board));
  } else {
    res.status(400).send('Post method error');
  }
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const board = await boardService.getById(id);
  if (board) {
    res.status(200).json(Board.toResponse(board));
  } else {
    res.status(404).send('Board not found');
  }
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const { title, columns } = req.body;
  if (id && title && columns) {
    const board = await boardService.updateBoard(id, title, columns);
    if (board === -1) {
      res.status(400).send('Put method error');
    } else {
      res.status(200).json(Board.toResponse(board));
    }
  } else {
    res.status(400).send('Put method error');
  }
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  const code = await boardService.deleteBoard(id);
  res.status(code).send('Delete user method');
});

module.exports = router;
