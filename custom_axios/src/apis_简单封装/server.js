import axios from "axios";

const server = (ops = {}) => {

  //创建默认配置项
  const DEFAULT_CONFIG = {
    method: 'get',
    timeout: 5000,
  }

  const options  = Object.assign({}, DEFAULT_CONFIG, ops)
  
  return new Promise((resolve, reject) => {
    axios({
      url: options.url,
      baseURL: options.baseURL,
      method: options.method,
      //get传值
      params: options.params,
      //post传值
      data: options.data,
      timeout: options.timeout
    }).then(res => {
      if (res.status === 200) {
        resolve(res.data)
      }
    }).catch(err => reject(err))
  })
}

export default server