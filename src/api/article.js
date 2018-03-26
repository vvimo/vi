import request from '@/utils/request'

export function articleAdd (data) {
  data.type = data.type[0]
  data.sort = data.sort[0]
  return request({
    url: '/article/add',
    method: 'post',
    params: data
  })
}

export function info (data) {
  return request({
    url: '/article/queryById',
    method: 'post',
    params: data
  })
}

export function articleList (data) {
  data.pageSize = data.pageSize || 10
  data.pageIndex = data.pageIndex || 1
  return request({
    url: '/article/queryAll',
    method: 'post',
    params: data
  })
}

export function upload (data) {
  return request({
    url: '/qiniu/upload',
    method: 'post',
    params: data
  })
}
