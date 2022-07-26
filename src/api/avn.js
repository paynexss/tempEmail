import request from '@/utils/request'

let url = 'https://api.pk2276.com/vw3';

export function verification_code(data) {
  return request({
    url: url + '/verification_code',
    method: 'post',
    data: {
      ...data
    }
  })
}
export function register(data) {
  return request({
    url: url + '/register',
    method: 'post',
    data: {
      ...data
    }
  })
}
export function create(data,header) {
  return request({
    url: url + '/member_page/create',
    method: 'post',
    data: {
      ...data
    },
    header:{
      ...header
    },
  })
}
export function invitation(data) {
  return request({
    url: url + '/202206/invitation',
    method: 'post',
    data: {
      ...data
    },
  })
}
