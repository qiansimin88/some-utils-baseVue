

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
    <div>
        <div class="header">
            header
        </div>
        <div class="playround">
            <div class="scroll-change">
                <div class="list">
                    <div class="list-item">1</div>
                    <div class="list-item">2</div>
                    <div class="list-item">3</div>
                    <div class="list-item">4</div>
                    <div class="list-item">5</div>
                    <div class="list-item">6</div>
                    <div class="list-item">7</div>
                    <div class="list-item">8</div>
                    <div class="list-item">9</div>
                    <div class="list-item">10</div>
                    <div class="list-item">1</div>
                    <div class="list-item">2</div>
                    <div class="list-item">3</div>
                    <div class="list-item">4</div>
                    <div class="list-item">5</div>
                    <div class="list-item">6</div>
                    <div class="list-item">7</div>
                    <div class="list-item">8</div>
                    <div class="list-item">9</div>
                    <div class="list-item">10</div>
                </div>
            </div>
        </div>
        <div class="bottom">
        </div>
    </div>
  </template>
  
  <script setup>




  import { ref, onMounted } from 'vue'

  const domList = document.querySelectorAll('.list-item')

  // 通过限定范围来求  动画当前的属性值
  const handlerAnimation = (startX, endX, startValue, endValue) => {
    // 接受的就 是当前scrollY的值
        return (x) => {
            // 小于最小值 就用最小值
            if (x < startX) {
                return startValue
            }
            
            if (x > endX) {
                return endValue
            }

            // 如果在动画范围内
            const differenceV = endValue - startValue
            const process = (x - startX) / differenceV
            // 当前 scrollY 动画位移动的位置
            return startValue +  process * differenceV
        }
  }


    const collection = (x, ) => {
        const itemMap = new Map()

        for (const item of domList) {
            itemMap.set(item, (x) => {
                return {
                    opacity: handlerAnimation()
                }
            })
        }
    }


    const cav = ref(null)
    onMounted(() => {
        window.addEventListener('scroll', () => {
        })
    })
  </script>
  
  <style scoped>
    body {
        background: #fff;
    }
    .header {
            height: 700px; font-size: 50px; text-align:  center; line-height: 700px;;
    }
    .playround {
        height: 1500px; position: relative;
        .scroll-change {
            position: sticky; background: #000; height: 100vh; top: 0;
            .list {
                display: flex; justify-content: start; flex-wrap: wrap;
                .list-item {
                    color: #fff; width: 100px; height: 100px; text-align: center; border: 1px solid red; background: red; margin-left: 20px; margin-top: 20px;
                }
            }
        }
    }
    .bottom {
        height: 1200px; font-size: 50px; text-align:  center; line-height: 1200px;;
    }
  </style>
  