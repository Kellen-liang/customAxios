import server from "./server";

const BASE_URL = '/api'

export const getInfo = (params) => {
  return server({
    url: '/get-str',
    baseURL: BASE_URL,
    method: 'get',
    params,
    timeout: 5000,
  })
}

export const postInfo = (data) => {
  return server({
    url: '/post-str',
    baseURL: BASE_URL,
    method: 'post',
    data,
    timeout: 5000,
  })
}