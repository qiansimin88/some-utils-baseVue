
<!--
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-09-18 07:42:09
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-09-27 06:39:29
 * @FilePath: /vue-some-utils/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<!-- http://localhost:5173/8 -->

<template>
    <canvas ref="cav" id="cav"></canvas>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import drawTree from '../Utils/9.canvas画一颗树'
    const cav = ref(null)
    onMounted(() => {
        drawTree(cav.value)
    })
  </script>
  
  <style scoped>
  #cav {
    position: fixed;
    height: 100vh;
    width: 100vw; 
    inset: 0;
    background: #222;
  }
  </style>
  