const drawTree = (dom) => {
  const canvas = dom;
  const ctx = canvas.getContext('2d');

  // 设置Canvas的宽度和高度，并根据devicePixelRatio进行缩放
  canvas.width = (window.innerWidth || document.documentElement.clientWidth) * devicePixelRatio;
  canvas.height = (window.innerHeight || document.documentElement.clientHeight) * devicePixelRatio;

  // 将坐标原点移动到Canvas中心下方100个像素的位置
  ctx.translate(canvas.width / 2, canvas.height - 100);
  
  // 在垂直方向上进行反转，确保绘制的树是正立的
  ctx.scale(1, -1);

  // 递归绘制树的函数
  const drawHandler = (startArray, lineWidth, length, angle) => {
    // 根据线条宽度和概率判断是否终止 这个是概率终止不可靠 必须接着下面的终止 否则爆桟
    if (lineWidth < 10 && Math.random() < 0.5) return;
    
    // 如果线条宽度小于2，绘制一个圆形并且终止
    if (lineWidth < 2) {
      ctx.beginPath();
      ctx.arc(...startArray, 10, 0, 2 * Math.PI);
      ctx.fillStyle = Math.random() < 0.3 ? '#f40' : 'green'; // 随机选择填充颜色
      ctx.fill();
      return;
    }

    // 绘制线条
    ctx.beginPath();
    ctx.moveTo(...startArray);

    // 线条的终点坐标 根据三角函数获得
    const endArray = [
      startArray[0] + Math.cos((angle * Math.PI) / 180) * length,
      startArray[1] + Math.sin((angle * Math.PI) / 180) * length,
    ];

    ctx.lineTo(...endArray);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = '#fff'; // 设置线条颜色
    ctx.lineCap = 'round';
    ctx.stroke();

    // 递归调用，绘制树的左右分支
    drawHandler(endArray, lineWidth * 0.8, length * 0.8, angle + Math.random() * 30);
    drawHandler(endArray, lineWidth * 0.8, length * 0.8, angle - Math.random() * 30);
  };

  // 调用绘制函数，传递初始参数
  drawHandler([0, 0], 30, 200, 90);
};


export default drawTree