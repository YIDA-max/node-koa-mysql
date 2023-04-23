/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-04-23 10:14:56
 * @LastEditors: YIDA-max 3136271519@qq.com
 * @LastEditTime: 2023-04-23 18:06:51
 * @FilePath: /node-koa-mysql/app.js
 * @Description: 默认的程序主入口
 */
// 引入依赖模块
import Koa from "koa";
import views from "koa-views";
import json from "koa-json";
import onerror from "koa-onerror";
import bodyparser from "koa-bodyparser";
import logger from "koa-logger";

import index from "./src/routes/index";
import users from "./src/routes/users";
const app = new Koa();
// 错误处理
onerror(app);
// 使用中间件
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"],
  })
);
app.use(json());
app.use(logger());
app.use(require("koa-static")(__dirname + "/public"));

// 配置视图模板引擎
app.use(
  views(__dirname + "/views", {
    extension: "pug",
  })
);

// 日志记录
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = Date.now() - (start as unknown as number);
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// 使用路由
app.use(index.routes());
app.use(index.allowedMethods());
app.use(users.routes());
app.use(users.allowedMethods());

// 错误处理
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

// 导出应用
export { app };
