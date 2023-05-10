//管理所有用户相关的请求
import request from '@/utils/request.js';

const addUser = function (params) {
  return request({ url: '/user/add', method: 'POST', data: params })
};
const getUserList = function () {
  return request({ url: '/user/list', method: 'GET', needToken: true }) //自定义是否携带token属性
};
const getUserInfo = function (id) {
  return request({ url: '/user/info', method: 'GET', params: { id: id } })
};
const delUser = function (id) {
  return request({ url: '/user/del', method: 'GET', params: { id } })
};
export { addUser, getUserList, getUserInfo, delUser };