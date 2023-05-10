import axios from 'axios'
import { Message } from 'element-ui';

//模拟有一个路由
const router = {}

const request = axios.create({
  //添加默认配置
  baseURL: '192.168.0.1:8080/test-a',
  timeout: 1000 * 8
})

// 添加请求拦截器
request.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么-打印我所发起请求的实际信息
    console.log(config);
    // * 通过自定义属性的判断是否需要携带上token信息（配合apis传过来的自定义属性）
    if (config.needToken) {
      config.headers['Authorization'] = localStorage.getItem('token') //在localStorage中获取token信息
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    console.log(error);
    return Promise.reject(error);
  });

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么-是否登录了
  let realRes = response.data
  if (realRes.code !== 200) {
    switch (realRes.code) {
      //判断没有权限状态码
      case 401:
        setTimeout(() => {
          Message.error('未授权，请重新登录，正在条装登录页面')
          router.push('/login')
        }, 1000)
        break
      default: return Message.error(realRes.msg)
    }
  }

  return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  if (error && error.response) {
    switch (err.response.status) {
      case 400:
        Message.error("请求错误")
        break;
      case 401:
        Message.error("未授权访问");
        break;
      case 404:
        Message.error("资源未找到说");
        break;
      default:
        Message.error("其他错误信息")
    }
  }
  return Promise.reject(error);
});

//导出
export default request;