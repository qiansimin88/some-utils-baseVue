<!--
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-09-18 07:42:09
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-09-22 07:20:37
 * @FilePath: /vue-some-utils/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->


<!-- http://localhost:5173/1 -->

<template>
    <main>
         <!-- 骚操作防抖 -->
        <div>
          <input type="text" v-model="text">
          <!-- 显示防抖的效果 -->
          <p>{{text}}</p>
        </div>
    </main>
  </template>
  
  <script setup>
  import { debounceRef } from '../Utils/1.v-model值的防抖处理'
  let text = debounceRef('', 300)
  </script>
  
  <style scoped>
  </style>
  