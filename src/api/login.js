import request from '@/utils/request'
import { cryptPwd } from '@/utils/crypto'

export function loginByUsername (userName, password) {
  const data = {
    userName,
    password: cryptPwd(password)
  }
  return request({
    url: '/api/login/login',
    method: 'post',
    params: data
  })
}

export function join (userName, password) {
  const data = {
    userName,
    password: cryptPwd(password)
  }
  return request({
    url: '/api/login/add',
    method: 'post',
    params: data
  })
}

export function logout () {
  return request({
    url: '/api/login/logout',
    method: 'post'
  })
}

export function getUserInfo (token) {
  return request({
    url: '/api/user/queryById',
    method: 'post',
    params: {
      id: token
    }
  })
}

export function cardAdd (item) {
  return request({
    url: '/api/card/add',
    method: 'post',
    params: item
  })
}
