<!--
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-09-22 06:44:19
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-09-27 11:39:16
 * @FilePath: /some-utils-baseVue/src/views/3.DOM水印.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-09-18 07:42:09
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-09-22 07:28:16
 * @FilePath: /vue-some-utils/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->


<!-- http://localhost:5173/3 -->

<template>
    <main>
         <!-- 骚操作防抖 -->
        <div id="hah">
            啊哈
        </div>
    </main>
  </template>
  
  <script setup>

  import waterMarker from '../Utils/5.DOM水印'
  
    const img = waterMarker({
        text: 'qiansimin88',
        fontSize: 20,
        gap: 40
    })

    const div = document.createElement('div')
    div.style.position = 'absolute'
    div.style.background = `url(${img.base64})`
    div.style.backgroundSize = `${img.size}px ${img.size}px`
    div.style.backgroundRepeat = 'repeat'
    div.style.zIndex = 9999
    div.style.inset = 0

    document.body.appendChild(div)


console.log(waterMarker({
    text: '哈哈哈',
    fontSize: 20,
    gap: 10
}))
  </script>
  
  <style scoped>
  </style>
  