<script setup>
import { ref } from 'vue'
import { getInfo, postInfo } from '../apis/index'

const getMsg = ref('hahah ')
const postMsg = ref('hahah ')

const getReq = async () => {
  const params = {
    msg: '这是msg'
  }
  const res = await getInfo(params)
  getMsg.value = res
}

const postReq = async () => {
  const data = {
    msg: '这是msg'
  }
  const res = await postInfo(data)
  postMsg.value = res
}
getReq()
postReq()


</script>

<template>
  <h1>{{ getMsg }}</h1>
  <h1>{{ postMsg }}</h1>
</template>

<style scoped>
</style>
