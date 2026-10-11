// 引入 Node.js 内置的 http 模块，用于创建 HTTP 服务器
const http = require('http');

// 服务器监听的地址和端口
const hostname = '127.0.0.1';
const port = 3000;

// 创建 HTTP 服务器
const server = http.createServer((req, res) => {
  // 设置响应头：状态码 200，内容类型为 HTML（UTF-8 编码以正确显示中文）
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  // 获取当前服务器时间
  const now = new Date();
  // 格式化为中国时区的可读时间
  const serverTime = now.toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' });

  // 拼接返回给浏览器的 HTML 页面
  const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>我的第一个AI开发的网站</title>
  <style>
    body {
      font-family: "Microsoft YaHei", "PingFang SC", sans-serif;
      text-align: center;
      padding-top: 100px;
      background-color: #f5f7fa;
      color: #333;
    }
    h1 {
      color: #1a73e8;
    }
    p {
      color: #666;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <h1>Hello World！我是【你的名字】，我的第一个AI开发的网站</h1>
  <p>当前服务器时间：${serverTime}</p>
</body>
</html>`;

  // 把 HTML 内容发送给浏览器并结束响应
  res.end(html);
});

// 启动服务器并监听指定端口
server.listen(port, hostname, () => {
  console.log(`服务器已启动：http://${hostname}:${port}`);
});
