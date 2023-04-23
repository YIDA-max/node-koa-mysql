/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-04-23 16:18:41
 * @LastEditors: YIDA-max 3136271519@qq.com
 * @LastEditTime: 2023-04-23 17:38:38
 * @FilePath: /node-koa-mysql/src/bin/www.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// #!/usr/bin/env node

/**
 * 引入依赖模块。
 */

import { app } from "../../app";
var debug = require("debug")("demo:server");
var http = require("http");

/**
 * 从环境变量中获取端口并存储在Express中。
 */

var port = normalizePort(process.env.PORT || "3000");

/**
 * 创建HTTP服务器。
 */

var server = http.createServer(app.callback());

/**
 * 在指定端口上监听，适用于所有网络接口。
 */

server.listen(port, () => {
  console.log("开启成功");
});
server.on("error", onError);
server.on("listening", onListening);

/**
 * 将端口规范化为数字、字符串或false。
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // 命名管道
    return val;
  }

  if (port >= 0) {
    // 端口号
    return port;
  }

  return false;
}

/**
 * HTTP服务器“error”事件的事件监听器。
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // 使用友好的消息处理特定的监听错误
  switch (error.code) {
    case "EACCES":
      console.error(bind + " 需要提高权限");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " 已被占用");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * HTTP服务器“listening”事件的事件监听器。
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}
