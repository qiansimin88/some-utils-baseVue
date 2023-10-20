
<!--
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-09-18 07:42:09
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-10-21 03:12:13
 * @FilePath: /vue-some-utils/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<!-- http://localhost:5173/9 -->



<template>
    <div class="card">
      <div class="test">
        我是钱思敏
      </div>
    </div>
</template>
  
  <style scoped>
 .card {
    width: 100vw;
    height: 100vh;
    background: #000;
    /* 对比度  黑的越黑  白的颜色越白  子元素是模糊滤镜  所以 越模糊 文字溶解效果越明显 */
    filter: contrast(30);
    .test {
        color: #fff;
        font-size: 100px;
        text-align: center;
        padding-top: 250px;
        letter-spacing: -50px;
        /* 模糊滤镜 方便父元素对比度滤镜产生溶解效果 */
        filter: blur(10px);
        animation: textlaunch 3s forwards;
    }
 }

 @keyframes textlaunch {
    to {
        letter-spacing: 40px;
     /* 不模糊  文字恢复正常 */
        filter: blur(0px);
    }
 }
  </style>
  