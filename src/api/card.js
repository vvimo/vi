import request from '@/utils/request'

export function cardAdd (item) {
  return request({
    url: '/card/add',
    method: 'post',
    params: item
  })
}

export function cardInfo (item) {
  return request({
    url: '/card/info',
    method: 'post',
    params: {
      number: item
    }
  })
}
