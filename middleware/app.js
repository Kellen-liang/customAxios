const express = require('express')

const app = express()

const port = 3333

//解析json数据
//否则post请求中的req.body为undefined
app.use(express.json())

app.get('/get-str', (req, res) => {
  res.send('get请求')
})

app.post('/post-str', (req, res) => {
  console.log(req.body);
  res.send('post请求')
})

app.listen(port, ()=> {
  console.log(`服务器已启动：http://127.0.0.1:${port}`);
})