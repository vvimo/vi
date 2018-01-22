// dao/userDao.js
// 实现与MySQL交互
const mysql = require('mysql')
const db = require('../conf/db')

// 使用连接池，提升性能
const pool  = mysql.createPool(db)

module.exports = pool
