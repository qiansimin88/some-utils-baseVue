
<!--
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-09-18 07:42:09
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-09-25 21:36:37
 * @FilePath: /vue-some-utils/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<!-- http://localhost:5173/2 -->


<!-- 快速生成命令 -->
<!-- div.item*20>{$} -->

<template>
    <div class="container" >
        <div v-for="(o, i) in arr" class="item" >{{i}}</div>
    </div>
    <div class="more" ref="loadmore">
        加载更多
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import obWatchMore from '../Utils/6.下拉刷新'

    const loadmore = ref(null)
    const arr = ref(new Array(10).fill(0))

    // 加载更多
    const getMore =() => {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('加载更多')
                arr.value.push(...new Array(20).fill(10))
                resolve ()
             }, 2000)
        })
    }

    onMounted(() => {
        obWatchMore(loadmore.value, getMore)
    })


    // getMore()
  </script>
  

  <!-- 三列 每列50px宽度 8行每行高100px -->
  <!-- 1fr 等于flex: 1 吃多少分剩余空间 -->
  <!-- gap: 行间距 列间距 -->
  <style scoped>
  .container {
    border: 1px solid #000;
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px 50px;
    width: 600px;
    /* justify-items: center;
    align-items: center; */
  }
  .item {
    background: rgb(117, 188, 18);
    height: 200px;
    border: 1px solid #ccc;
  }
  .more {
    text-align: center; border: 1px solid; height: 50px; line-height: 50px;
  }
  </style>
  