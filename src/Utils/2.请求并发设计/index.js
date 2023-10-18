/*
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-09-20 05:20:50
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-09-20 07:14:35
 * @FilePath: /some-utils-baseVue/src/Utils/2.请求并发设计/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

/**
 * Generates a function comment for the given function body in a markdown code block with the correct language syntax.
 *
 * @param {Function[]} tasks - an arrayfunction of tasks
 * @param {number} maxNum - the maximum number of tasks to run concurrently (default is 2)
 * @return {Promise} - a promise that resolves when all tasks are completed
 * @throws {Error} - if tasks is not an array
 */
const requestQueue = (tasks, maxNum = 2) => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(tasks)) return reject(new Error('tasks must be an array'))
        if (tasks.length === 0) {
            resolve()
            return 
        } 

        // 当前执行的函数的下标
        let nowRunIndex
        // 异步完成的计数
        let fineshCount = 0
        // console.log(tasks)

        let __run = (i) => {
            nowRunIndex = i
            console.log('发出了请求', nowRunIndex)
            tasks[nowRunIndex++]()
                .then(res => {
                    fineshCount++
                    // 某个请求成功就继续下一个
                    if (nowRunIndex < tasks.length) {
                        __run(nowRunIndex)
                    }
                    // 异步完成的个数 等于 总队列的个数 等于全部完成了
                    if (fineshCount === tasks.length) {
                        resolve()
                    }
                })
        }

        // 最大并发有几个就同时运行几个 这是初始化并发 后续并发交给run函数控制
        for(let i = 0; i < maxNum && i < tasks.length; i++) {
            __run(i)
        }
    })
}

export default requestQueue
//example  最高并发2
// requestQueue([promise[],promise[],promise[]], 2).then(() => {
//     // 全部完成
// })