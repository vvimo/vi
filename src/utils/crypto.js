const crypto = require('crypto')
const md5 = crypto.createHash('md5')

/* function getRandomSalt () {
  return Math.random().toString().slice(2, 5)
} */

export function cryptPwd (password, salt) {
  // 密码“加盐”
  let saltPassword = password + ':' + salt

  // 加盐密码的md5值
  let result = md5.update(saltPassword).digest('hex')
  return result
}
