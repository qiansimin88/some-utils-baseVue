/*
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-09-26 11:10:43
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-10-12 22:36:33
 * @FilePath: /some-utils-baseVue/src/Utils/8.canvas连接星空图/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


// 生成
const createCanvasStartLine = (dom) => {

    // 初始化一些数据
    const ctx = dom.getContext('2d')
    // canvas的宽高用的是属性值  而不是css的style来设置

    // 图片清晰度公式  放大缩小都清晰
    // 原始尺寸 = 样式尺寸 * 缩放倍率 
    dom.width = window.innerWidth * devicePixelRatio;
    dom.height = window.innerHeight * devicePixelRatio;

    // 点
    class Point {
        x;  
        y;  
        r;
        xSpeed;
        ySpeed;
        lastDrawTime;
        constructor(x, y) {
            // 半径
            this.r = 10

            this.init(x, y)
        }   
        // 初始化点的X, Y
        init(x = Point.getRandomNum(this.r, dom.width - this.r), y = Point.getRandomNum(this.r, dom.height - this.r)) {
            // 减去半径等于 X坐标的最大值Y 同理
            this.x = x
            this.y = y

            // 每秒移动距离 随机数  给每个点都设置一个随机X Y轴的 随机移动数据的值 就会每个点移动的方向都不同了
            this.xSpeed = Point.getRandomNum(-50, 50)
            this.ySpeed = Point.getRandomNum(-50, 50)

            // 记录显示器每一帧绘制的时间
            this.lastDrawTime = null
        }
        // 点的绘制方法
        draw() {

            // 有值就更新坐标 没值就是第一次不用管
            if (this.lastDrawTime) {
                // 每一帧记录的时间差 秒
                const duration = (Date.now() - this.lastDrawTime) / 1000

                // 下一帧位移的坐标
                let xDis = this.x + this.xSpeed * duration
                let yDis = this.y +  this.ySpeed * duration


                // 边界问题 回弹
                if (xDis > dom.width - this.r) {
                    xDis = dom.width - this.r
                    this.xSpeed = -this.xSpeed
                } else if (xDis < 0) {
                    xDis = 0
                    this.xSpeed = -this.xSpeed
                }

                if (yDis > dom.height - this.r) {
                    yDis = dom.height - this.r
                    this.ySpeed = -this.ySpeed
                } else if (yDis < 0) {
                    yDis = 0
                    this.ySpeed = -this.ySpeed
                }
  
                this.x = xDis
                this.y = yDis
            }

            // 开始 
            ctx.beginPath()
            // 设置坐标   X Y 半径 起始角度 结束角度  Math.PI*2 是一整圈
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
            // 设置颜色
            ctx.fillStyle = 'rgba(200, 200, 200)'
            // 填充
            ctx.fill()
            // 记录当前绘制时间戳
            this.lastDrawTime = Date.now();
        }
        
        static getRandomNum(min, max) {
            return Math.floor(Math.random() * (max + 1 - min) + min)
        }
    }

    // 连线点绘图
    class LineGraph {
        points;
        maxDis;
        _this;
        constructor(pointNum = 30, maxDis = 300) {
            // 绘制N个点 把所有点的实例放进数组
            this.points = new Array(pointNum).fill(0).map(() => new Point())
            this.maxDis = maxDis
            this._this = this;
        }
 
        draw() {
            try {
                // 用作平滑动画  显示器每一帧都执行
                requestAnimationFrame(() => {
                    this.draw()
                })

                // 每次动画都会清除之前的画布 形成动画效果  矩形左上角X,Y , 宽度 高度
                ctx.clearRect(0, 0, dom.width, dom.height)

            } catch (error) {
                throw new Error('canvas绘制出现错误')
            }

            for (let i = 0; i < this.points.length; i++) {
                const element1 = this.points[i];
                // 1.所有的点都绘制出来
                element1.draw()
                // 2.所有的点链接起来 双循环 每个点都互相连接
                for (let j = i + 1; j < this.points.length; j++) {
                    const element2 = this.points[j]
                    // 设置透明度攻势 最大距离500 那么500 透明度为0 
                    // 250距离 透明度为0.5 所以可得transparency = 1 - nowDis / 500

                    // 两点的距离 三角函数 短边的平方和 求根号
                    const lineDis = Math.sqrt( (element1.x - element2.x)**2 + (element2.y - element2.y)**2 )
                    // rgba中的透明度
                    const transparency = 1 - lineDis / 500
                    // 超出最大距离 不画线 减少线的数量 更清晰
                    if (lineDis > this.maxDis) {
                        continue;
                    }
                    // 画线的方法
                    ctx.beginPath()
                    // 起始坐标
                    ctx.moveTo(element1.x, element1.y)
                    // 终点坐标
                    ctx.lineTo(element2.x, element2.y)
                    // 闭环路径 多点的话 可以自动闭环
                    ctx.closePath();
                    // 开始描边  注意 距离越远的线 颜色越透明
                    ctx.strokeStyle = `rgba(200, 200, 200, ${transparency})`
                    ctx.stroke()
                }
            }
        }
        // 事件生成一些点
        eventRender(num = 2) {
            const _this = this
            return function (e) {
                const {
                    x, y
                } = e
                const newPoint = new Array(num).fill(0).map(() => new Point(x * devicePixelRatio, y  * devicePixelRatio))
                // 增加当前点的坐标的点
                _this.points.push(...newPoint)
            }
        }
    }

    const item = new LineGraph()
    item.draw()
    // 事件触发
    dom.addEventListener('click', item.eventRender())
}


export {
    createCanvasStartLine
}