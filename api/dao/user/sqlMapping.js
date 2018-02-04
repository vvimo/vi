// CRUD SQL语句
const user = {
  insert: 'INSERT INTO user(id, userName, password) VALUES(0,?,?)',
  update: 'update user set password=? where id=?',
  delete: 'delete from user where id=?',
  queryById: 'select * from user_info where userId=?',
  queryAll: 'select * from user',
  cardAdd: 'INSERT INTO card (number, name) VALUES (?,?)'
}

module.exports = user
