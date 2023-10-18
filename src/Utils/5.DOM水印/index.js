/*
 * @Author: qsm 348867341@qq.com
 * @Date: 2023-09-22 06:44:52
 * @LastEditors: qsm 348867341@qq.com
 * @LastEditTime: 2023-09-22 07:34:13
 * @FilePath: /some-utils-baseVue/src/Utils/5.DOM水印/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const renderWaterMarkBg = (props) => {
    const {
        text,    // 文字
        fontSize: fs, // 文字大小
        gap  // 水印距离文字的距离
    } = props

    const canvas = document.createElement('canvas')
    // 设备像素比尺寸*像素比 才会更加清晰  放大也不怕模糊
    const devicePixelRatio = window.devicePixelRatio || 1
    // 文字大小 * 设备像素比尺寸
    const fontSize = fs * devicePixelRatio
    //  字体设置
    const font = fontSize + 'px serif'
    
    console.log(font, devicePixelRatio)

    // 文字渲染上下文
    const ctx = canvas.getContext('2d')
    
    // 渲染上去才能获得宽度
    ctx.font = font
    // 文字宽度
    const fontWidth = ctx.measureText(text).width

    // 画布的尺寸 小于100 就100  因为太小就不合适
    const canvasSize = Math.max(100, fontWidth) + gap * devicePixelRatio


    // 画布尺寸
    canvas.width = canvasSize
    canvas.height = canvasSize

    ctx.translate(canvasSize / 2, canvasSize / 2)  // 画布中心
    ctx.rotate(( Math.PI / 180 ) * -45)  // 旋转45度
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'
    ctx.font = font
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'  // 垂直居中
    ctx.fillText(text, 0, 0) // 填充文字

    return {
        // canvas转图片
        base64: canvas.toDataURL(),
        // canvas尺寸/像素比 = 实际图片大小
        size: canvasSize / devicePixelRatio
    }

}

export default renderWaterMarkBg