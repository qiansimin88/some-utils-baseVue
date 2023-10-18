/*
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-09-20 10:45:10
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-09-24 02:14:44
 * @FilePath: /some-utils-baseVue/src/Utils/3.手写Promise/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// new Promise((resolve, reject) => {
//     resolve()
// }).then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// }).finally(d => {
//     console.log(d)
// }) 


// 摸你微任务
const micr = (task) => {
    setTimeout(() => {
        task()
    }, 0)
}


const PEDDING = 'peding'
const FULFILLED = 'fulfilled'
const REJECTD = 'rejectd'


class MyPromise {

    static _state = PEDDING
    static _value = undefined  // 不同状态返回的值
    static _handlers = {}  // 任务队列

    // 实例化暴露出 时事state值
    get nowState() {
        return {
            state: MyPromise._state,
            data: MyPromise._value
        }
    }

    constructor(executor) {

        if (typeof executor !== 'function') throw new Error('必须传入函数作为参数')

        // new实例化的时候如果抛出错误 直接进入rejectd 状态
        try {
            executor(this._resolve, this._reject)
        } catch (error) {
            this._reject(error)   
        }
    }
    _resolve(data) { 
        MyPromise._changedState(FULFILLED, data)
    }
    _reject(reason) { 
        MyPromise._changedState(REJECTD, reason)
    }

    // 原型方法咯
    then(onFulfilled, onRejected) {
        // THEN  返回的还是promise
        // 并且 then会有多个 所以要加入任务队列里面 等待state 发生变化执行
        return new MyPromise((resolve, reject) => {

            // 把成功和失败都加入处理队列
            MyPromise._handlerPush(
                onFulfilled,
                FULFILLED,
                resolve,
                reject
            )
            MyPromise._handlerPush(
                onRejected,
                FULFILLED,
                resolve,
                REJECTD
            ) 
            MyPromise._runHandles()
        })
    }

    // 处理接受then函数里面的函数任务
    static _handlerPush() {
        MyPromise._handlers.push({
            executor,
            state,
            resolve,
            reject
        })
    }

    // 在不同的状态执行队列任务
    static _runHandles() {
        if(MyPromise._state === PEDDING) {
            return 
        }
        // 循环执行所有队列任务 这里不用for循环有问题
        while(MyPromise._handlers[0]) {
            MyPromise._runOneHandler(MyPromise._handlers[0])
            // 运行完一个就删除一个
            MyPromise._handlers.shift()
        }
    }

    static _runOneHandler(one) {

    }

    // 改变状态的方法函数
    static _changedState(state, value) {
        // 如果状态已经变化了 就不执行任何操作 promise状态只能变化一次
        if (MyPromise._state !== PEDDING) {
            return 
        }
        MyPromise._state = state
        MyPromise._value = value
        // 值发生改变就要执行队列
        MyPromise._runHandles()
    }

}

const my = new MyPromise((resolve, reject) => {
    resolve('haha')
})

console.log(my.nowState)
