/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-04-23 16:18:41
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-04-27 00:18:00
 * @FilePath: \node-koa-mysql\src\bin\www.ts
 * @Description: 这个文件是www的文件，真正的启动文件，都是默认执行这个文件的
 */
// #!/usr/bin/env node
/**
 * 引入依赖模块。
 */
import { app } from "../../app";
import debugLib from "debug";
import http from "http";
const debug = debugLib("demo:server");
/**
 * 将端口规范化为数字、字符串或false。
 */
const normalizePort = (val) => {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    // 命名管道
    return val;
  }
  if (port >= 0) {
    // 端口号
    return port;
  }
  return false;
};
/**
 * 从环境变量中获取端口并存储在Express中。
 */
const port = normalizePort(process.env.PORT || "3000");
/**
 * 创建HTTP服务器。
 */

const server = http.createServer(app.callback());
/**
 * 在指定端口上监听，适用于所有网络接口。
 */

server.listen(port, () => {
  const os = require("os");
  /**
   * 获取当前机器的ip地址
   */
  function getIpAddress() {
    let ifaces = os.networkInterfaces();
    for (let dev in ifaces) {
      let iface = ifaces[dev];
      for (let i = 0; i < iface.length; i++) {
        let { family, address, internal } = iface[i];
        if (family === "IPv4" && address !== "127.0.0.1" && !internal) {
          return address;
        }
      }
    }
  }
  let ipAddress = getIpAddress();
  console.log("开启成功", process.env.PORT || "3000", ipAddress);
});
/**
 * HTTP服务器“error”事件的事件监听器。
 */

const onError = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
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
};
server.on("error", onError);
/**
 * HTTP服务器“listening”事件的事件监听器。
 */
const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
};
server.on("listening", onListening);
