
<!--
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-09-18 07:42:09
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-10-12 23:29:44
 * @FilePath: /vue-some-utils/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<!-- http://localhost:5173/9 -->



        <template>
            <div class="card">
            </div>
        </template>
          
          <style scoped>
         /* 自定义属性 */
          @property --direc {
            syntax: "<angle>";
            inherits: false;
            initial-value: 0deg;
          }

            .card {
              --direc: 0deg;
              position: relative;
              width: 100vw;
              height: 100vh;
              margin: 0 auto;
              border-radius: 8px;
              background: linear-gradient(var(--direc), #5ddcf5, #4e00c2);
              animation: spin 3s linear infinite ;
            }
            
            /* div模糊发光  垫一层 */
            .card::before {
                content: '';
                position: absolute;
                inset: 0px;
                background: inherit;  
                border-radius: inherit;
                /* z-index: -1; */
                /* 高斯模糊 边缘发光  */
                filter: blur(20px);  
            }


            /* 动画只能改变数值 所以只能通过自定义属性来做 */
            @keyframes spin {
                to {
                    --direc: 360deg;
                }
            }
          </style>
          