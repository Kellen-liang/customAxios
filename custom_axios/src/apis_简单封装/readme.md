## 常用配置项

```js
  {
    // url(常用)  表示我们用来发请求的地址
    url: '/user',

    // method(常用)  表示我们用来发请求的方法，默认是get
    method: 'get',

    // baseURL(常用)  表示我们用来发请求跟 URL,最终发起请求的地址是 baseURL+url
    baseURL: 'https://some-domain.com/api/',

    // headers(常用)  配置我们发起的网络请求的请求头，通常是携带token用来鉴权
    headers: {'X-Requested-With': 'XMLHttpRequest'},

    // params(常用) 这里配置的对象会作为参数拼接到url上  ?username=xiaomin&password=123456
    // 通常是 get请求携带参数的地方(重要)
    params: { username: 'xiaomin', password: '123456' },

    // data(常用)  data中的参数会被放到请求体中
    // 通常是 post,put,delete请求携带参数的地方(重要)
    // 可以传输二进制，例如上传图片用的 FormData对象就可以用data来传输
    data: {
      firstName: 'Fred'
    },

    // timeout(常用)  设置请求的超时时间，超过了时间请求还没有响应的会会报错走到catch，默认值是0 表示一直等待响应
    timeout: 1000,
    
    // onUploadProgress 用来监听上传的进度，一般图片上传时候的显示进度条这里会用上
    onUploadProgress: function (progressEvent) {
      // Do whatever you want with the native progress event
    },
  }


```