const uuid = require('uuid');

const getIdForColumns = (columns) => columns.map((element) => ({id:uuid.v1(), ...element})) 

class Board {
  constructor({
    id = uuid.v1(),
    title = "title_Board",
    columns = []
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = getIdForColumns(columns);
  }

  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

module.exports = Board;
