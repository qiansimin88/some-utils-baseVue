/*
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-09-20 04:55:38
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-10-21 03:04:32
 * @FilePath: /some-utils-baseVue/src/router/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../../src/App.vue')
    },
    {
      path: '/1',
      name: '1',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/1.v-model值的防抖处理.vue')
    },
    {
      path: '/2',
      name: '2',
      component: () => import('../views/2.请求并发设计.vue')
    },
    {
      path: '/3',
      name: '3',
      component: () => import('../views/3.DOM水印.vue')
    },
    {
      path: '/4',
      name: '4',
      component: () => import('../views/4.网格布局.vue')
    },
    {
      path: '/5',
      name: '5',
      component: () => import('../views/6.网格布局视差效果.vue')
    },
    {
      path: '/6',
      name: '6',
      component: () => import('../views/7.下拉刷新.vue')
    },
    {
      path: '/7',
      name: '7',
      component: () => import('../views/8.canvas绘制星空连线.vue')
    },
    {
      path: '/8',
      name: '8',
      component: () => import('../views/9.clip-path图片裁切效果应用.vue')
    },
    {
      path: '/9',
      name: '9',
      component: () => import('../views/10.houdiniCss旋转渐变背景.vue')
    },
    {
      path: '/10',
      name: '10',
      component: () => import('../views/11.滤镜对比度文字虚化展开效果.vue')
    },
    {
      path: '/11',
      name: '11',
      component: () => import('../views/12.canvas画一颗树.vue')
    },
  ]
})

export default router
