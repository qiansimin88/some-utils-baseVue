<!--
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-09-18 07:42:09
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-09-22 07:20:31
 * @FilePath: /vue-some-utils/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<!-- http://localhost:5173/2 -->

<template>
    <main>
         <!-- 骚操作防抖 -->
         请求并发设计
        <div>
        </div>
    </main>
  </template>
  
  <script setup>
  import requestQueue from '../Utils/2.请求并发设计'
  import mock from '../Utils/2.请求并发设计/mockPromise'
  // console.log(mock(20))
  requestQueue(mock(5), 2)
    .then(() => {
      console.log('所有异步函数全部执行完成')
    })
  </script>
  
  <style scoped>
  </style>
  