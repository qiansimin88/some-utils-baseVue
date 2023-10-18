/*
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-09-20 05:05:45
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-09-20 07:08:29
 * @FilePath: /some-utils-baseVue/src/Utils/2.请求并发设计/mockPromise.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// mock(30)

/**
 * Generates an array of promises that resolve after a random delay.
 *
 * @param {number} number - The number of promises to generate.
 * @return {Array<Promise>} An array of promises that resolve with the index of each promise.
 */

// 生成多少个promise 函数 为什么是函数  因为想要并发控制 只能是函数才能方便并发执行N个 不然是异步请求的话
// 数组循环就执行了 所以用函数包起来才比较合适
const mock = (number) => {
    let cache = []
    for (let i = 0; i < number; i++) {
        cache.push(
            () => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        console.log('完成了', i)
                        resolve(i)
                    }, Math.random() * 4000)
                })
            }
        )
    }
    return cache
}

// console.log(mock(20))

export default mock