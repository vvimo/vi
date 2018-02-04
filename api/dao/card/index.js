const $pool = require('../pool')
const $sql = require('./sqlMapping')
const $jsonWrite = require('../jsonWrite')
 
module.exports = {
  add: function (req, res, next) {
    // 获取前台页面传过来的参数
    let param = req.query || req.params

    // 建立连接，向表中插入值
    // 'INSERT INTO user(userName, password) VALUES(?,?)'
    $pool.getConnection(function (err, connection) {
      connection.query($sql.insert, [param.number, param.name], function (err, result) {
        if (result) {
          result = { code: 200, msg: '新增成功' }
        }

        // 以json形式，把操作结果返回给前台页面
        $jsonWrite(res, result)

        // 释放连接 
        connection.release()
      })
    })
  },
  queryByCard: function (req, res, next) {
    let param = req.query || req.params

    // 为了拼凑正确的sql语句，这里要转下整数
    $pool.getConnection(function(err, connection) {
      connection.query($sql.queryByCard, [param.number], function(err, result) {
        if (result) {
          result = {
            code: 200,
            msg: '查询成功',
            data: result
          }
        }
        $jsonWrite(res, result)
        connection.release()
      })
    })
  }
}
