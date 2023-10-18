/*
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-09-25 21:10:24
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-09-25 21:28:26
 * @FilePath: /some-utils-baseVue/src/Utils/6.下拉刷新/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


const obWatchMore = (dom, cb) => {
    let isLoading = false
    const ob = new IntersectionObserver(async (entries) => {
        const entry = entries[0] 
        // 如果没有交叉或者正在加载 什么都不做
        if (!entry.isIntersecting || isLoading) return
        console.log('开始加载')
        isLoading = true
        await cb()
        isLoading = false
    }, {
        threshold: 0,  // 交叉边距
        root: null // 可以选择监听交叉的DOM  null标识默认视图窗口和DOM交叉
    })
    ob.observe(dom)
}



export default obWatchMore