// CRUD SQL语句
const user = {
  insert:'INSERT INTO article VALUES(0, ?, ?, ?, ?, ?, 0, ?, ?, ?, 0, ?, CURRENT_TIMESTAMP)',
  update:'update article set avauten=?, title=?, time=?, sort=?, author=?, read=?, description=?, source=?, type=?, state=?, content=? where id=?',
  updateRead: 'update article set read=? where id=?',
  updateState: 'update article set state=? where id=?',
  delete: 'delete from article where id=?',
  queryById: 'select * from article where id=?',
  queryAll: 'select SQL_CALC_FOUND_ROWS * from article limit ?, ?; select FOUND_ROWS() as total;'
}

module.exports = user
