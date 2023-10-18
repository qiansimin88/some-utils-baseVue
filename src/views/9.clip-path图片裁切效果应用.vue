
<!--
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-09-18 07:42:09
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-09-27 08:28:20
 * @FilePath: /vue-some-utils/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<!-- http://localhost:5173/9 -->



    <!-- http://tools.jb51.net/code/css3path 在线编剧裁切工具-->
    <!-- clip-path:  
        inset : 矩形  ( x y z x ) 分别是距离各个边的距离 
        circle: 圆形  ( x半径  at  z圆心坐标 y圆心坐标 )
        ellipse: 椭圆
        polygon: 多边形 -->

<template>
    <div>
        <div class="demo1">
        demo1: 鼠标移入
            <img class="box" src="http://www.picsum.photos/200/200?1" alt="">
        </div>
        demo2: 鼠标移入
        <div class="demo2">
            <img class="box" src="http://www.picsum.photos/500/200?1" alt="">
            <img class="box" src="http://www.picsum.photos/500/200?2" alt="">
        </div>
    </div>
</template>
  
  <script setup>
  </script>
  
  <style scoped>
  .demo1 {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    &:hover .box {
        clip-path: polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%);
    }
    .box {
        transition: 0.5s ease-out;
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        /* 矩形 http://tools.jb51.net/code/css3path */
        clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    }
  }
  .demo2 {
    overflow: hidden;
    position: relative;
    width: 500px;
    height: 200px;
    margin: 0 auto;
    margin-top: 30px;
    .box {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        transition: 0.5s;
        object-fit: cover;
        &:nth-child(2) {
            z-index: 2;
            clip-path: polygon(-30% 0%, -30% 0%, 0% 50%, -30% 100%, -30% 100%);
        }
    }
    &:hover .box:nth-child(2) {
        clip-path: polygon(-30% 0%, 100% 0%, 110% 50%, 100% 100%, -30% 100%);
    }
  }
  </style>
  