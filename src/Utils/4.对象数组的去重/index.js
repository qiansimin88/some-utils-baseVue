/*
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-09-22 03:04:55
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-09-26 12:00:56
 * @FilePath: /some-utils-baseVue/src/Utils/4.对象数组的去重/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */



// 数组去重  对象的值一样也被认为是相同的 包括值的顺序

var c  = { c: 2, d: 3 }
var a = [
    { a: 1, b:2 },
    { c: 2, d:1 },
    c,
    { a: 1, b: 2, d:3 },
    { c: 2, d:1 },
    { c: 2, d: 1, d: 3 },
    { d:2 },
    { b:2, a:1 },
    c,
    3,
    4,
    5,
    3
]

/**
 * Removes repeated elements from an array.
 *
 * @param {array} array - The array from which to remove repeated elements.
 * @return {array} - The modified array with repeated elements removed.
 */
const removeRepeat = ( array ) => {
     // 两个值是否相等 辅助函数
     var isEquals = (v1, v2) => {
        // 如果有一个是原始类型 就 === 值比较
        if (!isObject(v1) || !isObject(v2)) {
            return Object.is(v1, v2)
        }
        // 如果都是对象 判断引用地址是否相同
        if (v1 === v2) return true

        // 属性个数是否相同 不同则直接不同
        if (Object.keys(v1).length !== Object.keys(v2).length) return false
        
        // 每个属性是否相同
        for (let key in v1) {
            // v2 如果没有V1的key 也不相同
            if (!v2.hasOwnProperty(key)) return false
            // 递归比较
            if (!isEquals(v1[key], v2[key])) return false
        }
        return true
    }
    // 判断是不是原始类型和引用类型
    var isObject = (v) => typeof v === 'object' && v !== null
    
    // 双循环 对比当前值和其他值的对比
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            const nowValue = array[i]
            const nextValue = array[j]
            if (isEquals(nowValue, nextValue)) {
                array.splice(j, 1)
                // j的值减 每次splice 数组的下标应该减小
                j--
            }
        }
    }
    return array
}

console.log(removeRepeat(a));