// import mysql from 'mysql'
// import settings from './settings'
var mysql = require('mysql')
var settings = require('./settings.js')

const connection = mysql.createConnection(settings.db)

connection.connect()

var selectSQL = 'select * from `user`'

connection.query(selectSQL, function(err, rows) {
  if (err) throw err
  console.log('The solution is: ', rows[0].userName)
  /* for (var i = 0; i < rows.length; i++) {
    arr[i] = rows[i].name
  }

  // 把搜索值输出
  app.get('/', function(req, res) {
    res.send(arr)
  }) */
})

connection.end()
