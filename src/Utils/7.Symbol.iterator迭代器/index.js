/*
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-09-26 03:28:13
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-09-26 03:33:54
 * @FilePath: /some-utils-baseVue/src/Utils/7.Symbol.iterator迭代器/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * 
 */



Object.prototype[Symbol.iterator] = function (){
    const itemArr = Object.values(this)
    // 返回该数组的迭代器 迭代器是一个函数调用
    const itemIter = itemArr[Symbol.iterator]()
    return itemIter
}

// 面试题 让下面的结构成立
// 主要就是让Object对象有迭代器就可以结构了  上面就是如何让对象拥有迭代属性的方法
const [a, b] = { a: 1, b:2 }


console.log(a, b)  // 1 2

