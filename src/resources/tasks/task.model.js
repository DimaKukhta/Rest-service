const uuid = require('uuid');

class Task {
  constructor({
    id = uuid.v1(),
    title = 'USER',
    order = 'user',
    description = 'P@55w0rd',
    userId = 'userID',
    boardId = 'boardID',
    columnId = 'columnID'
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(task) {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return { id, title, order, description, userId, boardId, columnId };
  }
}

module.exports = Task;
