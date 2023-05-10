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

//其中 this.file是我们 input type为file 选中文件后，e.target.files的值，当然，这个值是数组，我们需要他的第一个
//注意的就是使用 data 传递了一个参数，参数类型是 FromData。
export const uploadImg = (file) => {
  console.log(file);
  const formData = new FormData();
  formData.append('file', file);
  axios({
    url: 'XXXXXXXXXXXXXXXXXXXXXXXXXX',
    method: 'post',
    data: formData,
    onUploadProgress(progressEvent) {
      let complete = (((progressEvent.loaded / progressEvent.total) * 100) | 0) + '%';
      console.log('上传 ' + complete);
    },
  }).then((res) => {
    console.log('uploadImg res==>', res);
  });
}