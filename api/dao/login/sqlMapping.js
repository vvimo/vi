// CRUD SQL语句
const login = {
  insert: 'INSERT INTO user(id, userName, password) VALUES (0,?,?)',
  update: 'update user set password=? where id=?',
  delete: 'delete from user where id=?',
  queryByUsername: 'select id from user where userName=? and password=?'
}

module.exports = login
