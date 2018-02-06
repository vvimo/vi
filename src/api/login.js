import request from '@/utils/request'
import { cryptPwd } from '@/utils/crypto'

export function loginByUsername (userName, password) {
  const data = {
    userName,
    password: cryptPwd(password)
  }
  return request({
    url: '/login/login',
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
    url: '/login/add',
    method: 'post',
    params: data
  })
}

export function logout () {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo (token) {
  return request({
    url: '/user/queryById',
    method: 'post',
    params: {
      id: token
    }
  })
}

export function cardAdd (item) {
  return request({
    url: '/card/add',
    method: 'post',
    params: item
  })
}
