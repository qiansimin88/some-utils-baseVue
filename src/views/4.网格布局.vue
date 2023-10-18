
<!--
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-09-18 07:42:09
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-09-22 10:42:52
 * @FilePath: /vue-some-utils/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<!-- http://localhost:5173/2 -->


<!-- 快速生成命令 -->
<!-- div.item*20>{$} -->

<template>
    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
        <div class="item">7</div>
        <div class="item">8</div>
        <div class="item">9</div>
        <div class="item">10</div>
        <div class="item">11</div>
        <div class="item">12</div>
        <div class="item">13</div>
        <div class="item">14</div>
        <div class="item">15</div>
        <div class="item">16</div>
        <div class="item">17</div>
        <div class="item">18</div>
        <div class="item">19</div>
        <div class="item">20</div>
    </div>
  </template>
  
  <script setup>
  </script>
  

  <!-- 三列 每列50px宽度 8行每行高100px -->
  <!-- 1fr 等于flex: 1 吃多少分剩余空间 -->
  <!-- gap: 行间距 列间距 -->
  <style scoped>
  .container {
    border: 1px solid #000;
    display: grid;
    grid-template-columns: 50px 50px 1fr;  
    grid-template-rows: 100px 1fr 100px 100px 100px 100px 100px 100px;
    gap: 10px 40px;
    /* justify-items: center;
    align-items: center; */
  }
  .item {
    background: #f40;
    border: 1px solid #ccc;
  }
  </style>
  