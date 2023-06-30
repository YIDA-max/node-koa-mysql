/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-04-23 10:14:56
 * @LastEditors: YIDA-max 3136271519@qq.com
 * @LastEditTime: 2023-06-30 14:57:41
 * @FilePath: /node-koa-mysql/app.ts
 * @Description: 默认的程序主入口
 */
// 使用插件来读取.env里面的文件
require("dotenv").config();
// 引入依赖模块
import Koa from "koa";
import views from "koa-views";
import json from "koa-json";
import onerror from "koa-onerror";
import bodyparser from "koa-bodyparser";
import koaStatic from "koa-static";
import logger from "koa-logger";
import index from "./src/routes/index";
import users from "./src/routes/users";
import pixiv from "./src/routes/pixiv";
import login from "./src/routes/Login";
import fiction from "./src/routes/fiction";
import comics from "@/routes/comics";
import mooncell from "@/routes/Mooncell";
import BZ from "@/routes/01BZ";
import utilsClass from "@/routes/utilsClass";
import { error } from "@/utils/error";
const cors = require("@koa/cors");
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
// 将 koa-static 中间件绑定到应用程序实例
// __dirname 表示当前文件所在的目录，加上 "/public" 表示 public 文件夹是相对于当前文件的
// 中间件的作用是提供静态文件服务，使客户端可以通过浏览器访问 public 文件夹中的静态文件
app.use(koaStatic(__dirname + "/public"));
app.use(koaStatic(__dirname + "/fictionList"));
app.use(koaStatic(__dirname + "/images"));
// 静态资源允许跨域
app.use(
  cors({
    origin: "http://localhost:8000", // 允许的请求来源
    credentials: true, // 是否允许发送跨域请求的凭据（如 cookie）
  })
);

// 配置视图模板引擎
app.use(
  views(__dirname + "/views", {
    extension: "html",
    map: {
      html: "ejs",
    },
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
app.use(pixiv.routes());
app.use(pixiv.allowedMethods());
app.use(login.routes());
app.use(login.allowedMethods());
app.use(fiction.routes());
app.use(fiction.allowedMethods());
app.use(comics.routes());
app.use(comics.allowedMethods());
app.use(BZ.routes());
app.use(BZ.allowedMethods());
app.use(utilsClass.routes());
app.use(utilsClass.allowedMethods());
app.use(mooncell.routes());
app.use(mooncell.allowedMethods());
// 检查某个路由是否挂载
const middleware = app.middleware;
for (const item of middleware as any) {
  if (item.router && item.router.opts.prefix === "/pixiv") {
    console.log("/pixiv路由已经挂载");
    break;
  }
}
// 错误处理
app.on("error", error);
// 导出应用
export { app };
