
<!--
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-09-18 07:42:09
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-09-25 20:52:34
 * @FilePath: /vue-some-utils/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<!-- http://localhost:5173/5 -->


<!-- 快速生成命令 -->
<!-- div.item*20>{$} -->


<!-- 随机生成图片网址 -->
<!-- www.picsum.photos/200/200 -->

<!-- div.item*12>img[src="http://www.picsum.photos/200/200?$"] -->

<template>
    <div class="container">
        <div class="item"><img src="http://www.picsum.photos/200/200?1" alt=""></div>
        <div class="item"><img src="http://www.picsum.photos/200/200?2" alt=""></div>
        <div class="item"><img src="http://www.picsum.photos/200/200?3" alt=""></div>
        <div class="item"><img src="http://www.picsum.photos/200/200?4" alt=""></div>
        <div class="item"><img src="http://www.picsum.photos/200/200?5" alt=""></div>
    </div>
  </template>
  
  <script setup>
  </script>
  

  
  <style lang="less" scoped>
  .container {
    width: 300px;
    height: 300px;
    margin: 0 auto;
    margin-top: 100px;
    display: grid;
    /* 三列三行 每行每列都等分  用repeat  */
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
     /* 网格编组 相同的字母为一组 */
    grid-template: 
        'A A B'
        'C D B'
        'C E E';
    gap: 10px;
    // 变量
    --r: 1turn;
  }
  // 运用相同的动画 不同的变量参数
  .container, .item>img {
    animation: rotation 5s infinite linear;
  }
  .item {
    overflow: hidden;
    border: 2px solid;

    // 子元素旋转的时候必须居中 不然旋转就会导致不协调 且有白边
    display: flex;
    justify-content: center;
    align-items: center;
    & > img {
        --r: -1turn;
        // 放大图片的尺寸 才不会旋转的时候有白边出现
        width: 250%;
        height: 250%;
        object-fit: cover;
    }
    // 占据上方的横跨两列的A
    // 根据上面的编组进行定位
    &.item:nth-child(1) {
        grid-area: A;
    }
    &.item:nth-child(2) {
        grid-area: B;
    }
    &.item:nth-child(3) {
        grid-area: C;
    }
    &.item:nth-child(4) {
        grid-area: D;
    }
    &.item:nth-child(5) {
        grid-area: E;
    }
  }
  
  @keyframes rotation {
    to {
        // 1turn 1圈  360deg的意思
        transform: rotate(var(--r));
    }
  }

  </style>
  