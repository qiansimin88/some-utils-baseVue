/*
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-09-18 07:47:58
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-09-20 04:59:45
 * @FilePath: /vue-some-utils/src/utils/customRef.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { customRef } from "vue"

//   防抖骚操作 避免了每次用的时候都要手动控制input 这样可以直接利用v-model的双向绑定自动控制防抖

export const debounceRef =  (value, duration = 1000) => {
    let timer 
    return customRef((track, trigger) => {
        return {
            get() {
                 // 收集依赖
                track()
                return value
            },
            set(val) {
                // 这里利用防抖来触发更新值
                clearTimeout(timer)
                timer = setTimeout(() => {
                    // 派发更新
                    trigger()
                    value = val
                }, duration)
            }
        }
    })
}